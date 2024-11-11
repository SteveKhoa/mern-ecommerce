const chalk = require('chalk');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const path = require('path');

const setupDB = require('./db');
const { ROLES } = require('../constants');
const User = require('../models/user');
const Brand = require('../models/brand');
const Product = require('../models/product');
const Category = require('../models/category');

const vegetablesjson = require("../data/vegetables.json");
const brandsjson = require("../data/brands.json");

const args = process.argv.slice(2);
const email = args[0];
const password = args[1];

const NUM_PRODUCTS = 100;
const NUM_BRANDS = 10;
const NUM_CATEGORIES = 10;

const seedDB = async (vegetablesjson) => {
  try {
    let categories = [];

    console.log(`${chalk.blue('✓')} ${chalk.blue('Seed database started')}`);

    if (!email || !password) throw new Error('Missing arguments');
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Seeding admin user...')}`);
      const user = new User({
        email,
        password,
        firstName: 'admin',
        lastName: 'admin',
        role: ROLES.Admin
      });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      await user.save();
      console.log(`${chalk.green('✓')} ${chalk.green('Admin user seeded.')}`);
    } else {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Admin user already exists, skipping seeding for admin user.')}`);
    }

    const categoriesCount = await Category.countDocuments();
    if (categoriesCount >= NUM_CATEGORIES) {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Sufficient number of categories already exist, skipping seeding for categories.')}`);
      categories = await Category.find().select('_id');
    } else {
      const vegetables = vegetablesjson.vegetables;
      for (const vegetable of vegetables) {
        const category_ = vegetable.category;
        const count = await Category.countDocuments({ name: category_ });

        if (count <= 0) {
          const category = new Category({
            name: category_,
            description: faker.lorem.sentence(),
            isActive: true
          });
          await category.save();
          categories.push(category);
        }
      }
      console.log(`${chalk.green('✓')} ${chalk.green('Categories seeded.')}`);
    }

    const brandsCount = await Brand.countDocuments();
    if (brandsCount >= NUM_BRANDS) {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Sufficient number of brands already exist, skipping seeding for brands.')}`);
    } else {
      const brands = brandsjson.brands;
      for (const brand_ of brands) {
        const brand = new Brand({
          name: brand_.title,
          description: brand_.description,
          image: brand_.img,
          isActive: true
        });
        await brand.save();  
      }
      console.log(`${chalk.green('✓')} ${chalk.green('Brands seeded.')}`);
    }

    const productsCount = await Product.countDocuments();
    if (productsCount >= NUM_PRODUCTS) {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Sufficient number of products already exist, skipping seeding for products.')}`);
    } else if (true) {
      const vegetables = vegetablesjson.vegetables;
      const vegetablesBaseUrl = vegetablesjson.baseUrl;
      const brands = await Brand.find().select('_id');
      for (const vegetable of vegetables) {
        const randomCategoryIndex = faker.number.int(categories.length - 1);
        const product = new Product({
          sku: faker.string.alphanumeric(10),
          name: vegetable.title,
          imageUrl: vegetablesBaseUrl.concat(vegetable.img),
          description: vegetable.description,
          quantity: faker.number.int({ min: 1, max: 100 }),
          price: faker.commerce.price(),
          taxable: faker.datatype.boolean(),
          isActive: true,
          brand: brands[faker.number.int(brands.length - 1)]._id,
          category: categories[randomCategoryIndex]._id
        });
        await product.save();
        await Category.updateOne({ _id: categories[randomCategoryIndex]._id }, { $push: { products: product._id } });
      }
      console.log(`${chalk.green('✓')} ${chalk.green('Products seeded and associated with categories.')}`);
    }
  } catch (error) {
    console.log(`${chalk.red('x')} ${chalk.red('Error while seeding database')}`);
    console.log(error);
    return null;
  } finally {
    await mongoose.connection.close();
    console.log(`${chalk.blue('✓')} ${chalk.blue('Database connection closed!')}`);
  }
};

(async () => {
  try {
    await setupDB();
    await seedDB(vegetablesjson);
  } catch (error) {
    console.error(`Error initializing database: ${error.message}`);
  }
})();
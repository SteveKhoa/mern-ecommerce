const Mongoose = require('mongoose');
const { Schema } = Mongoose;
const { PAYMENT_STATUS, PAYMENT_METHOD } = require('../constants');

const PaymentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order'
  },
  amount: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: Object.values(PAYMENT_STATUS),
    default: PAYMENT_STATUS.Pending
  },
  method: {
    type: String,
    enum: Object.values(PAYMENT_METHOD),
    default: PAYMENT_METHOD.Cash
  }
});

module.exports = Mongoose.model('Payment', PaymentSchema);

/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';
import Button from '../../components/Common/Button';
import Badge from '../../components/Common/Badge';


class Homepage extends React.PureComponent {  
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.filterProducts(slug);
  }

  render() {
    const { products } = this.props;

    return (
      <div className='homepage'>
        <Row className='flex-row'>
          <Col xs='12' lg='6' className='order-lg-1 mb-3 px-3 px-md-2'>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
              {banners.map((item, index) => (
                <div key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between align-items-center'>
              <div className="d-flex flex-column align-items-center">
                <h1>Top Organic Products.</h1>
                <p>🏆 Our top choices of the week 🏆</p>
                <div>
                  {console.log(products)}
                  {products.map((prod, index) => {
                    if (index < 5) {
                      return (
                        <div key={index}>
                          <a href={`/product/yams/${prod.slug}`}>
                            <Row className='flex-row'>
                              <Col xs='12' lg='11'>
                                <h2>{prod.name}</h2>
                                <p>{prod.description}</p>
                              </Col>
                              <Col xs='12' lg='1' className='d-flex flex-row align-items-center'>
                                <p><Badge pill={true}>${prod.price}</Badge></p>
                              </Col>
                            </Row>
                          </a>
                        </div>)
                    }
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <hr/>
        <div className="mt-5">
          <Col className="mt-5 d-flex flex-column align-items-center">
            <div className="container">
              <blockquote className="blockquote text-center text-success">
                <p style={{fontSize: 64}}>Freshful. Tasty. The Best of Vietnam.</p>
                <footer className="blockquote-footer">Nguyen Van Khe, <cite title="The Greek Way">Vendor Manager at SaigonFoods</cite></footer>
              </blockquote>
            </div>
          </Col>
          <Col className="mt-5 d-flex flex-column align-items-center">
            <div className="container">
              <blockquote className="blockquote text-center text-success">
                <p style={{fontSize: 64}}>You will never need to worry about the quality of the foods anymore.</p>
                <footer className="blockquote-footer">Tran Thi Thanh Ha, <cite title="The Greek Way">Office employee in Phu Nhuan, Ho Chi Minh City</cite></footer>
              </blockquote>
            </div>
          </Col>
        </div>
        <hr/>
        <div className="mt-5 d-flex flex-column align-items-center">
            <p style={{fontSize: 32}}>Let's have a glance! 👀</p>
            <a href="/shop">
              <Button variant='primary' text='Shop Now' />
            </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.storeProducts,
  };
};

export default connect(mapStateToProps, actions)(Homepage);

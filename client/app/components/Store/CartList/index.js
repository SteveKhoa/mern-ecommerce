/**
 *
 * CartList
 *
 */

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Button from '../../Common/Button';

const CartList = props => {
  const { cartItems, handleRemoveFromCart } = props;
  const [selectedItems, setSelectedItems] = useState({});

  const handleProductClick = () => {
    props.toggleCart();
  };

  const handleCheckboxChange = (itemId) => {
    const selectedProducts = cart.filter(item => selectedItems[item.id]);
    if (selectedProducts.length === 0) {
      alert('Please select at least one item');
      return;
    }
    navigate('/payment', { state: { selectedItems: selectedProducts } });
  };

  const handleConfirmClick = () => {
    const selectedProducts = cartItems.filter(item => selectedItems[item._id]);
    // Assuming you're using react-router-dom for navigation
    props.history.push('/payment', { selectedProducts });
  };

  return (
    <div className='cart-list'>
      {cartItems.map((item, index) => (
        <div key={index} className='item-box'>
          <div className='item-details'>
            <Container>
              <Row className='mb-2 align-items-center'>
                <Col xs='9' className='pr-0'>
                  <div className='d-flex align-items-center'>
                    <img
                      className='item-image mr-2'
                      src={`${item.imageUrl || '/images/placeholder-image.png'}`}
                    />
                    <Link
                      to={`/product/${item.slug}`}
                      className='item-link one-line-ellipsis'
                      onClick={handleProductClick}
                    >
                      <h2 className='item-name one-line-ellipsis'>{item.name}</h2>
                    </Link>
                  </div>
                </Col>
                <Col xs='3' className='text-right d-flex justify-content-end align-items-start'>
                  <input
                    type='checkbox'
                    className='mr-2'
                    checked={selectedItems[item._id] || false}
                    onChange={() => handleCheckboxChange(item._id)}
                  />
                  <Button
                    borderless
                    variant='empty'
                    ariaLabel={`remove ${item.name} from cart`}
                    icon={<i className='icon-trash' aria-hidden='true' />}
                    onClick={() => handleRemoveFromCart(item)}
                  />
                </Col>
              </Row>
              <Row className='mb-2 align-items-center'>
                <Col xs='9'>
                  <p className='item-label'>price</p>
                </Col>
                <Col xs='3' className='text-right'>
                  <p className='value price'>{` $${item?.totalPrice}`}</p>
                </Col>
              </Row>
              <Row className='mb-2 align-items-center'>
                <Col xs='9'>
                  <p className='item-label'>quantity</p>
                </Col>
                <Col xs='3' className='text-right'>
                  <p className='value quantity'>{` ${item.quantity}`}</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className='cart-list-footer mt-3'>
          <Container>
            <Row>
              <Col className='text-right'>
                <Button
                  variant='primary'
                  text='Confirm Selected Items'
                  onClick={handleConfirmClick}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default CartList;

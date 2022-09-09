import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const Remove=(productID)=> {
    dispatch(remove(productID))
  }

  return (
    <div>
      <h2>Cart</h2>

      <div className='cartWrapper'>
        {
          products.map((product) => (
            <div className='cartCard' key={product.id}>
              <img src={ product.image } alt="cart-product" />
              <h5>{ product.title }</h5>
              <h5>{ product.price }</h5>
              <button className='btn' onClick={() => Remove(product.id) }>Remove</button>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Cart
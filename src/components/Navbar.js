import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

const Navbar = () => {
  const countCart = useSelector((state) => state.cart );
  
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <span className='logo'>REDUX STORE</span>

        <div>
            <Link className="navLink" to="/"> Home </Link>
            <Link className="navLink" to="/cart"> Cart </Link>
            <span className='cartCounter'><b>Cart items: { countCart.length } </b></span>
        </div>
    </div>
  )
}

export default Navbar
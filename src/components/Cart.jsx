import React from 'react'
import { useSelector } from 'react-redux'
import MenuItems from './MenuItems'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className='text-center p-4 m-4 '>
            <h1 className='font-bold text-4xl'>CART</h1>
            {cartItems.length == 0 && <h1 className='text-2xl m-2 p-2'>Cart is empty please add items.</h1>}
            <div className='w-10/12 m-auto'>
                {cartItems.map((item, index) => (
                    <MenuItems
                        key={index}
                        menuInfo={item.menuInfo}
                    />
                ))}

                <div> <button className='m-2 p-2 bg-black text-white rounded-3xl' onClick={() => handleClearCart()}>Clear cart</button></div>

            </div>
        </div>
    )
}

export default Cart

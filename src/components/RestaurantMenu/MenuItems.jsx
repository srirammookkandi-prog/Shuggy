import React, { useEffect, useState } from 'react'
import { IMAGE_URL } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, itemIn, removeItem } from '../../utils/cartSlice';

const MenuItems = (props) => {
    const [popup, setpopup] = useState(false);
    const [minus, setMinus] = useState(false);
    const { name, defaultPrice, price, description, imageId } = props.menuInfo;
    const { restaurantName } = props;
    const dispatch = useDispatch();
    const quantity = useSelector((store) => store.cart.items.filter(
        (item) => item.restaurantName === restaurantName &&
            item.menuInfo?.name === name && item.menuInfo?.imageId === imageId
    ).length);
    const handleAddItems = () => {
        dispatch(addItem(props));
        dispatch(itemIn());
        setpopup(true);
    }
    const handleRemoveItem = () => {
        dispatch(removeItem(props));
        setMinus(true);
    }
    useEffect(() => {
        if (!popup) return undefined;

        const timeoutId = setTimeout(() => {
            setpopup(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [popup])
    useEffect(() => {
        if (!minus) return undefined;

        const timeoutId = setTimeout(() => {
            setMinus(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [minus])
    return (
        <div className='m-2 md:p-2 border-gray-300 border-b-2 flex justify-between'>
            <div className='py-2 w-8/12 md:w-10/12'>
                <span>{name} </span>
                <span> ₹ {((defaultPrice || price) / 100).toFixed(2)}</span>
                <div className='hidden sm:md:inline-block text-xs'>
                    <p> {description}</p>
                </div>
            </div>
            <div className='w-4/12 md:w-2/12 relative'>
                <div className='absolute'>
                    {quantity === 0 ? (
                        <button className='bg-black px-2 py-1 md:py-0 md:px-5 mx-6 my-14 md:mx-8 md:my-24 rounded-xl text-xs sm:text-xs md:text-lg md:rounded-3xl border-white text-white shadow-2xl hover:scale-95' onClick={handleAddItems}>
                            Add +
                        </button>
                    ) : (
                        <div className='bg-black px-2 py-1 md:px-3 mx-6 my-14 md:mx-8 md:my-24 rounded-xl md:rounded-3xl text-white shadow-2xl flex items-center gap-3 md:gap-5'>
                            <button aria-label={`Add another ${name}`} className='text-lg md:text-2xl' onClick={handleAddItems}>+</button>
                            <span className='text-sm md:text-lg'>{quantity}</span>
                            <button aria-label={`Remove one ${name}`} className='text-lg md:text-2xl' onClick={handleRemoveItem}>-</button>
                        </div>
                    )}
                    {
                        popup && (
                            <div className="mx-auto w-100 fixed flex inset-0 z-50 items-end my-2 justify-center" >
                                <div
                                    className="w-90 rounded-xl bg-white p-3 shadow-xl text-black flex justify-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h1 className='font-bold text-xl'>Item added to cart ✅</h1>

                                </div>
                            </div>
                        )
                    }
                    {
                        minus && (
                            <div className="mx-auto w-100 fixed flex inset-0 z-50 items-end my-2 justify-center" >
                                <div
                                    className="w-90 rounded-xl bg-white p-3 shadow-xl text-black flex justify-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h1 className='font-bold text-xl'>Item removed from cart ✅</h1>

                                </div>
                            </div>
                        )
                    }
                </div>
                <img className='p-4 w-25 h-20 md:w-37.5 md:h-30' src={IMAGE_URL + imageId}></img>
            </div>
        </div>
    );
}

export default MenuItems 

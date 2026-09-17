import React, { useEffect } from 'react'
import { useState } from 'react';
import { IMAGE_URL } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem, itemIn } from '../../utils/cartSlice';

const MenuItems = (props) => {
    const [popup, setpopup] = useState(false);
    const { name, defaultPrice, price, description, imageId } = props.menuInfo;
    const dispatch = useDispatch();
    const handleAddItems = () => {
        dispatch(addItem(props));
        dispatch(itemIn());
        setpopup(true);
    }
    useEffect(() => {
        setTimeout(() => {
            setpopup(false);
        }, 3000);
    }, [handleAddItems])
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
                    <button className='bg-black px-2 py-1 md:py-0 md:px-5 mx-6 my-14 md:mx-8 md:my-24 rounded-xl text-xs sm:text-xs md:text-lg md:rounded-3xl border-white text-white shadow-2xl hover:scale-95' onClick={() => handleAddItems(props)}>
                        Add +
                    </button>
                    {
                        popup && (
                            <div className="fixed inset-0 z-50 flex items-end my-2 justify-center" >
                                <div
                                    className="w-90 rounded-xl bg-white p-3 shadow-xl text-black flex justify-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h1 className='font-bold text-xl'>Item added to cart ✅</h1>

                                </div>
                            </div>
                        )
                    }
                </div>
                <img className='p-4 w-[100px] h-[80px] md:w-[150px] md:h-[120px]' src={IMAGE_URL + imageId}></img>
            </div>
        </div>
    );
}

export default MenuItems 

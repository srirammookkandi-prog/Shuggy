import React from 'react'
import { IMAGE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const MenuItems = (props) => {
    const { name, defaultPrice, price, description, imageId } = props.menuInfo;
    const dispatch = useDispatch();
    const handleAddItems = () => {
        dispatch(addItem(props));
    }
    return (
        <div className='m-2 p-2 border-gray-300 border-b-2 flex justify-between'>
            <div className='py-2 w-10/12'>
                <span>{name} </span>
                <span> ₹ {((defaultPrice || price) / 100).toFixed(2)}</span>

                <div className='text-xs'>
                    <p> {description}</p>
                </div>
            </div>
            <div className='w-2/12 relative'>
                <div className='absolute'>
                    <button className='bg-black px-4 mx-8 my-24 rounded-3xl border-white text-white shadow-2xl hover:scale-95' onClick={() => handleAddItems(props)}>
                        Add +
                    </button>
                </div>
                <img className='p-4 w-[150px] h-[120px]' src={IMAGE_URL + imageId}></img>
            </div>
        </div>
    );
}

export default MenuItems 

import React, { useState } from 'react'
import MenuItems from './MenuItems';

const ItemCategory = (props) => {
    const [showItems, setShowItems] = useState(true);
    const { title, itemCards } = props?.data;

    const handleClick = () => {
        setShowItems(!showItems);
    }
    return (
        <div>
            <div className='w-8/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 text-left'>
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='font-bold'>{title} ({itemCards.length})</span>
                    <span>▼</span>
                </div>
                {showItems &&
                    itemCards.map((item) => (
                        <MenuItems key={item?.card?.info?.id} menuInfo={item?.card?.info} />
                    ))
                }

            </div>
        </div >
    );
}

export default ItemCategory;

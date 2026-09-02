import React, { useState } from 'react'
import MenuItems from './MenuItems';

const NestedCategory = (props) => {
    const [showItems, setShowItems] = useState(true);
    const { title, categories } = props?.data;
    const handleClick = () => {
        console.log("Clicked")
        setShowItems(!showItems);
    }
    return (
        <div className='w-10/12 md:w-8/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 text-left'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold' >{title} ({categories.length})</span>
                <span>▼</span>
            </div>
            {showItems &&
                categories.map((subcategory) => (
                    <div key={subcategory?.title}>
                        <h3 className='font-bold' >{subcategory?.title}</h3>
                        <div>
                            {
                                subcategory?.itemCards?.map((item) => (
                                    < MenuItems key={item?.card?.info?.id} menuInfo={item?.card?.info} />))
                            }
                        </div>
                    </div>
                )
                )
            }
        </div>


    )
}

export default NestedCategory

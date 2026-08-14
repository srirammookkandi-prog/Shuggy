import { useState, useEffect } from 'react';
import Shimmer from '../components/Shimmer/Shimmer';
import { RESTAURANT_MENU_API } from '../../utils/constants';
import ItemCategory from './ItemCategory';
import NestedCategory from './NestedCategory';
import useResInfo from '../../utils/useResInfo';
import useOrganisedData from '../../utils/useOrganisedData';
import { useParams } from 'react-router';
import { CDN_URL } from '../../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResInfo(resId);
  const resMenu = useOrganisedData(resId);
  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;
  return (
    <div className='m-auto'>
      <h1 className='text-center font-bold text-3xl p-3'>{name}</h1>
      {/* <img className='m-auto w-[800] h-[450]' src={CDN_URL + cloudinaryImageId} ></img> */}
      <p className='text-center text-2xl'>{cuisines.join(', ')} - {costForTwoMessage}</p>
      {
        resMenu?.map((category) => category.type === "item" ?
          (<ItemCategory key={category.title} data={category} />) :
          (<NestedCategory key={category.title} data={category} />)
        )
      }

    </div>
  );
}
export default RestaurantMenu

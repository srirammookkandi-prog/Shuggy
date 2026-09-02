import ItemCategory from './ItemCategory';
import NestedCategory from './NestedCategory';
import useRestaurantData from '../../utils/useRestaurantData';
import { useParams } from 'react-router';
import RestaurantShimmer from './Shimmer/RestaurantShimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantData(resId);
  if (resInfo == null) return <RestaurantShimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  return (resInfo == null) ? <RestaurantShimmer /> : (
    <div className='m-auto'>
      <h1 className='text-center font-bold text-xl md:text-3xl p-3'>{name}</h1>
      <p className='text-center text-lg md:text-2xl'>{cuisines.join(', ')} - {costForTwoMessage}</p>
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

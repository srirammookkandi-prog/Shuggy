import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer/Shimmer";
import { useEffect, useState } from "react";
import { Link } from 'react-router';
import useOnlineStatus from "../../utils/useOnlineStatus";
import useListofRestaurant from "../../utils/CustomHooks/useListofRestaurant";


const Body = () => {
  
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [input, setInput] = useState("");

    const listOfRestaurants = useListofRestaurant();
   useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
}, [listOfRestaurants]);
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks like you are Offline. Please check your Internet Connection.</h1>

    //conditional rendering with ternary operator..:)
    return (listOfRestaurants.length == 0) ? <Shimmer /> : (
        <div className="body">
            <div className="flex filter m-2 p-2 justify-between px-10" >
                <h1 className="px-5 font-bold text-5xl">Restaurant List</h1>
                <button className="filter-btn font-bold bg-orange-500 text-white px-2 py-2 rounded-2xl hover:bg-orange-600 " onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className=" flex flex-wrap justify-around ">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}> <Restaurant resData={restaurant} /></Link>
                ))}
            </div>
        </div >
    );
}
export default Body
import Restaurant, { withPromotedLabel } from "./Restaurant";
import Shimmer from "./Shimmer";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from 'react-router';
import useOnlineStatus from "../../utils/useOnlineStatus";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [input, setInput] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(Restaurant);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0145405&lng=77.6768368&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();
            console.log(json?.data?.cards?.find((items) => items?.card?.card?.id?.includes("top_brands_for_you"))?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setListOfRestaurants(json?.data?.cards?.find((items) => items?.card?.card?.id?.includes("top_brands_for_you"))?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards?.find((items) => items?.card?.card?.id?.includes("top_brands_for_you"))?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) { console.error(err); }
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks like you are Offline. Please check your Internet Connection.</h1>

    //conditional rendering with ternary operator..:)
    return (listOfRestaurants.length == 0) ? <Shimmer /> : (
        <div className="body">
            <div className="flex filter m-2 p-2 justify-between px-10" >
                <div className="flex ">
                    <input className="mx-4 border-black border p-1 " type="Text" value={input} onChange={(e) => { setInput(e.target.value) }} />
                    <button className="group flex items-center rounded-full border border-gray-300 bg-white px-2 py-1 transition-all duration-500 hover:w-40 hover:bg-orange-500 hover:text-white" onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(input.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant);
                    }
                    }><span className="text-xl">🔍</span>

                        <span
                            className="ml-0 w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all font-bold duration-500 group-hover:ml-3 group-hover:w-20 group-hover:opacity-100"
                        >
                            Search
                        </span></button>
                </div>
                <button className="filter-btn font-bold bg-orange-500 text-white px-2 py-2 rounded-2xl hover:bg-orange-600" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div>
                <h1 className="px-10 font-bold text-5xl">Restaurant List</h1>
            </div>
            <div className=" flex flex-wrap justify-around ">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>{restaurant.info.promoted == true ? <RestaurantCardPromoted resData={restaurant} /> : <Restaurant resData={restaurant} />}</Link>
                ))}
            </div>
        </div >
    );
}
export default Body
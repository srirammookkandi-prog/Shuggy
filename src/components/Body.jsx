import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer/Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useListofRestaurant from "../../utils/CustomHooks/useListofRestaurant";



const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const listOfRestaurants = useListofRestaurant();

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);


  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are Offline. Please check your Internet Connection.
      </h1>
    );
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex filter m-2 p-2 justify-between px-10">
        <h1 className="px-5 font-bold text-5xl">Restaurant List</h1>
        <div>
          <button
            className={`filter-btn font-bold text-white px-2 py-2 rounded-2xl hover:bg-orange-600 ${isClicked
              ? "bg-orange-600"
              : "bg-orange-500"
              }`}
            onClick={() => {
              setFilteredRestaurants(
                !isClicked
                  ? listOfRestaurants.filter((res) => res.info.avgRating > 4)
                  : listOfRestaurants,
              );
              setIsClicked(!isClicked);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap justify-around ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <Restaurant resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

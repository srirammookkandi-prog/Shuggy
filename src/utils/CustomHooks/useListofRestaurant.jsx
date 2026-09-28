import React,{useEffect,useState}from 'react'

const useListofRestaurant = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
            fetchData();
        }, []);
        const fetchData = async () => {
            try {
                const data = await fetch("https://shuggy-api.vercel.app/api/restaurant");
                const json = await data.json();
                setListOfRestaurants(json?.data?.cards?.find((items) => items?.card?.card?.id?.includes("top_brands_for_you"))?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            } catch (err) { console.error(err); }
}
  return listOfRestaurants;
}
export default useListofRestaurant;

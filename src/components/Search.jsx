import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { X } from "lucide-react";
import useListofRestaurant from "../../utils/CustomHooks/useListofRestaurant";
import Restaurant from "./Restaurant";
import SearchShimmer from "./Shimmer/SearchShimmer";

const Search = () => {
  const [input, setInput] = useState("");
  const [finalList, setFinalList] = useState([]);
  const listOfRestaurants = useListofRestaurant();
  useEffect(() => {
    setFinalList(listOfRestaurants);
  }, [listOfRestaurants]);

  return (listOfRestaurants.length == 0) ? (
    <SearchShimmer />
  ) : (
    <>
      <div className="flex my-5 justify-center ">
        <input
          className="mx-4 border-black border px-5 py-2 w-[500px]"
          type="Text"
          value={input}
          placeholder="Search Restaurants"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="mx-2">
          <span>
            <Link to="/">
              <X />
            </Link>
          </span>
        </button>
      </div>
      <div className="px-10 font-bold text-5xl">
        {input == "" ? (
          <h1>Restaurant List</h1>
        ) : (
          <h1>Results for "{input}"</h1>
        )}
      </div>
      <div className="flex flex-wrap justify-around">
  {
    listOfRestaurants.filter((res) =>
      res.info.name
        .toLowerCase()
        .includes(input.toLowerCase())
    ).length > 0 ? (

      listOfRestaurants
        .filter((res) =>
          res.info.name
            .toLowerCase()
            .includes(input.toLowerCase())
        )
        .map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <Restaurant resData={restaurant} />
          </Link>
        ))

    ) : (
      <h1 className="font-semibold text-2xl p-5">
        No Result Found
      </h1>
    )
  }
</div>
    </>
  );
};

export default Search;

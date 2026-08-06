import { useState, useEffect } from "react";
import React from 'react'
import { RESTAURANT_MENU_API } from "./constants";
import { useParams } from 'react-router';

const useRestaurantMenu = () => {
    const [resMenu, setResMenu] = useState([]);
    const { resId } = useParams();
    useEffect(() => { fetchMenu(); }, []);
    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_MENU_API + resId);
        const response = await data.json();
        const menuData = response?.data?.cards?.find((obj) => obj?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (obj) => obj?.card?.card["@type"]?.includes("ItemCategory") || obj?.card?.card["@type"]?.includes("NestedItemCategory")
        );
        const organisedMenuData = menuData?.map((item) => {
            const type = item?.card?.card["@type"];
            const title = item?.card?.card?.title;
            const itemCards = item?.card?.card?.itemCards || [];
            const categories = item?.card?.card?.categories || [];
            if (type?.includes("NestedItemCategory")) {
                return {
                    title,
                    type: "nested",
                    categories: categories?.map((subcategory) => {
                        return {
                            title: subcategory?.title,
                            itemCards: subcategory?.itemCards
                        };
                    })
                };
            } else {
                return {
                    title,
                    type: "item",
                    itemCards
                }
            }
        }
        );
        setResMenu(organisedMenuData);
    }
    return resMenu;
}

export default useRestaurantMenu;

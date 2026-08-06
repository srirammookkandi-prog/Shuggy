import { useState, useEffect } from "react";
import React from 'react'
import { RESTAURANT_MENU_API } from "./constants";
import { useParams } from 'react-router';

const useRestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => { fetchMenu(); }, []);
    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_MENU_API + resId);
        const response = await data.json();
        setResInfo(response.data);
    };

    return resInfo;
}

export default useRestaurantMenu;

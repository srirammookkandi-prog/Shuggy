import { useEffect } from "react";
useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0145405&lng=77.6768368&restaurantId=773645&catalog_qa=undefined&submitAction=ENTER');
            const json = await data.json();
            console.log(json);
        } catch (err) { }
    };
    fetchData();
}, []);



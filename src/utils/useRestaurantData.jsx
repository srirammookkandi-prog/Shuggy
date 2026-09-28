import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantData = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, [resId]);

  const fetchRestaurantData = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const response = await data.json();

    setResInfo(response.data);

    const menuData =
      response?.data?.cards
        ?.find((obj) => obj?.groupedCard)
        ?.groupedCard
        ?.cardGroupMap
        ?.REGULAR
        ?.cards
        ?.filter(
          (obj) =>
            obj?.card?.card?.["@type"]?.includes("ItemCategory") ||
            obj?.card?.card?.["@type"]?.includes("NestedItemCategory")
        );

    const organisedMenuData = menuData?.map((item) => {
      const type = item?.card?.card?.["@type"];
      const title = item?.card?.card?.title;
      const itemCards = item?.card?.card?.itemCards || [];
      const categories = item?.card?.card?.categories || [];

      if (type?.includes("NestedItemCategory")) {
        return {
          title,
          type: "nested",
          categories: categories?.map((subcategory) => ({
            title: subcategory?.title,
            itemCards: subcategory?.itemCards,
          })),
        };
      }

      return {
        title,
        type: "item",
        itemCards,
      };
    });

    setResMenu(organisedMenuData);
  };

  return {
    resInfo,
    resMenu,
  };
};

export default useRestaurantData;
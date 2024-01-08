import { useEffect, useState } from "react";

const useRes = (id) => {
  const [restaurantInfo, setRestaurentInfo] = useState();
  
  const RESTAURENT_INFO_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7565815&lng=81.6769714&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(RESTAURENT_INFO_API);
    const json = await data.json();
    setRestaurentInfo(json?.data?.cards[0]?.card?.card?.info);
  }
  return restaurantInfo;
};

export default useRes;

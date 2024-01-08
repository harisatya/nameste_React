import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Rescard from "./Rescard";
import { RESTAURENT_API } from "./Constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [restaurants, setRestaurants] = useState();
  // const [originalRestaurants, setOriginalRestaurants] = useState();
  console.log(restaurants, "restaurants");
  // console.log(originalRestaurants, "originalRestaurants");

  useEffect(() => {
    apiCall();
  }, []);
  async function apiCall() {
    const data = await fetch(RESTAURENT_API);
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setOriginalRestaurants(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  }
  const isOnline = useOnline();
  if(!isOnline){
    return<h1>you are offline....! please connect to internet</h1>
  }

  return !restaurants ? (
    <Shimmer />
  ) : (
    <>
      <div className="card-list">
        {restaurants.map((restaurant) => {
          {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <Rescard {...restaurant?.info} />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};
export default Body;

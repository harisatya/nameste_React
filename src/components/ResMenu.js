import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL } from "./Constants";
import useRes from "../utils/useRes";


const ResMenu = () => {
  //to read dynamic URL parmas we use this hook
  const { id } = useParams();
  const restaurantInfo = useRes(id);

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h1>{restaurantInfo?.name}</h1>
        <img src={IMG_URL + restaurantInfo?.cloudinaryImageId} alt="image" />
        <h2>{"Area Name : " + restaurantInfo?.areaName || ""}</h2>
        <h2>{"Restaurent Id : " + restaurantInfo?.id || ""}</h2>
        <h2>{"Average Rating : " + restaurantInfo?.avgRating || ""}</h2>
        <h2>{"City : " + restaurantInfo?.city || ""}</h2>
      </div>
    </>
  );
};
export default ResMenu;

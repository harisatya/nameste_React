import { IMG_URL } from "./Constants";

const Rescard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, id } = props;

  return (
    <>
      <div className="card" key={id}>
        <img src={IMG_URL + cloudinaryImageId} alt="image" />
        <h3>{name}</h3>
        <h5>{cuisines.join(",")}</h5>
        <h4>{"Rating: " + avgRating}</h4>
      </div>
    </>
  );
};

export default Rescard;

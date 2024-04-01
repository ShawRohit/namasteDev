import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resObj }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resObj.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>ETA 38min</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

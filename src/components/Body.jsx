import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock-data";
import { useState } from "react";

const Body = () => {
  const [restrauntData, setrestrauntData] = useState(resList);

  const filterRestraunt = () => {
    setrestrauntData(
      restrauntData.filter((restraurant) => restraurant.info.avgRating > 4.5)
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterRestraunt();
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resObj={resList[0]} /> */}
        {restrauntData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

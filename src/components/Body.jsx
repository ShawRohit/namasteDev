import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [restrauntData, setrestrauntData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata = await data.json();
    setfilteredData(
      jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setrestrauntData(
      jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const filterRestraunt = () => {
    setrestrauntData(
      restrauntData.filter((restraurant) => restraurant.info.avgRating > 4.5)
    );
  };

  return restrauntData.length === 0 ? (
    <h1>Loading.....</h1>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setfilteredData(
                restrauntData.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>

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
        {filteredData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

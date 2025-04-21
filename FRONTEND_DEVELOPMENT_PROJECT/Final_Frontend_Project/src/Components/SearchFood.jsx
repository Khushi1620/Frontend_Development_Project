import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function SearchFood() {
  const { id } = useParams();
  const [searchedData, setSearchedData] = useState("");
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServerRequest = "https://thingproxy.freeboard.io/fetch/";
      const swiggyApi = `https://www.swiggy.com/dapi/menu/pl/search?lat=28.6139298&lng=77.2088282&restaurantId=${id}&isMenuUx4=true&query=${searchedData}&submitAction=ENTER`;
      const response = await fetch(proxyServerRequest + swiggyApi);
      const data = await response.json();
      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );
      console.log(filterData); 
      setRestData(filterData);
    }
    fetchData();
  }, []);

  return (
    <div className="w-[60%] mx-auto mt-20">
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border font-semibold  text-gray-700"
        placeholder="Search here"
        onChange={(e) => setSearchedData(e.target.value)}
      ></input>
    </div>
  );
}
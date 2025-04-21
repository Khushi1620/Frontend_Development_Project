import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MenuCards from "./MenuCards";

export default function RestaurantMenu() {
  let { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServerRequest = "https://thingproxy.freeboard.io/fetch/";
      const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServerRequest + swiggyApi);
      const data = await response.json();
      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );
      setRestData(filterData);
    }
    fetchData();
  }, []);


  return (
    <div>
      <div className="w-[60%] mx-auto mt-10 mb-5 text-center">
        <Link to={`/city/delhi/${id}/search`}>
        <p className="bg-gray-50 text-2xl font-semibold text-gray-700 py-3 px-5 border border-gray-400 rounded-2xl">Search for dishes</p>
        </Link>
      </div>
      <div className="w-[60%] mx-auto my-1">
        <button className={`text-2xl py-2 px-10 text-gray-700 cursor-pointer mr-4 border border-gray-400 font-semibold rounded-2xl ${selected==='veg'?"bg-green-600 text-white":"bg-gray-50"}`} onClick={()=>setSelected(selected === 'veg'? null: 'veg')}>Veg</button>
        <button className={`text-2xl py-2 px-4 text-gray-700 cursor-pointer border border-gray-400 font-semibold rounded-2xl ${selected==='non-veg'?"bg-red-600 text-white":"bg-gray-50"}`} onClick={()=>setSelected(selected === 'non-veg'? null: 'non-veg')}>Non veg</button>
      </div>
    <div className="w-[60%] mx-auto mt-20">
      {RestData.map((menuItems) => (
        <MenuCards
          key={menuItems?.card?.card?.title}
          menuItems={menuItems?.card?.card}
          foodSelected={selected}
        ></MenuCards>
      ))}
    </div>
    </div>
  );
}
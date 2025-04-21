import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function RestaurantList() {

    const [RestData, setRestData] = useState([]);

    useEffect(()=> {
       async function fetchData() {
         const proxyServerRequest = "https://thingproxy.freeboard.io/fetch/"
         const swiggyApi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true";
         const response = await fetch(proxyServerRequest+swiggyApi);
         const data = await response.json();
         setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       }
       fetchData();
    }, [])
    // Shimmer effect 
    if (RestData.length == 0) {
        return <Shimmer></Shimmer>
    }
    return(
       <div className="w-[80%] mx-auto mt-20">
        <h1 className="text-3xl font-extrabold">Restaurants with online food delivery in Delhi</h1>
        <div className="flex flex-wrap mx-auto mt-8 gap-5">
            {
              RestData.map((RestInfo)=><RestCard key={RestInfo.info.id} RestInfo={RestInfo}></RestCard>)
            }
        </div>
        </div>
    )
}
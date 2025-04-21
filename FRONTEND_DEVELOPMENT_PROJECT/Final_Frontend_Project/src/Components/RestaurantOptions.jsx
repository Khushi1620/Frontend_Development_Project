import { RestaurantsGridCards } from "../utils/Restaurants";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantOption() {
    return(
        <>
        <div className="w-[80%] mx-auto mt-20">
            <h1 className="text-2xl font-bold">Discover best restaurants on Dineout</h1>
            <div className="flex flex-nowrap bg-gray-50 gap-1 mb-20 overflow-x-auto mt-5">
                {
                    RestaurantsGridCards.map((RestaurantData)=> (<RestaurantCard key={RestaurantData?.info?.id} RestaurantData= {RestaurantData}></RestaurantCard>))
                }
            </div>
        </div>
        </>
    )
}
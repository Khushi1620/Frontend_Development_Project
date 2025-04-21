import { imageGridCards } from "../utils/Food_Items";
import FoodCard from "./FoodCard";

export default function FoodOption(){
    return (
        <>
         <div className="w-[83%] container mx-auto flex gap-10 flex-wrap mt-40">
            {
             imageGridCards.map((FoodData)=><FoodCard key={FoodData.id} FoodData={FoodData}></FoodCard>)
            }
             </div>
        </>
    )
}
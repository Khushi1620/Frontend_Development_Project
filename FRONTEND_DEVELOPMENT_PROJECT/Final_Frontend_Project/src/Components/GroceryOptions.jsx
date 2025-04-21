import { GroceryGridCards } from "../utils/Grocery_Items";
import GroceryCard from "./GroceryCard";
export default function GroceryOption() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-20">
        <h1 className="text-2xl font-bold">Shop groceries on Instamart</h1>
        <div className="container mx-auto flex gap-10 flex-nowrap overflow-x-auto mt-5">
          {GroceryGridCards.map((GroceryData) => (
            <GroceryCard
              key={GroceryData.id}
              GroceryData={GroceryData}
            ></GroceryCard>
          ))}
        </div>
      </div>
    </>
  );
}

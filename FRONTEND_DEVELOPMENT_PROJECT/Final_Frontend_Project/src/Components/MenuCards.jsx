import { useState } from "react";
import MenuCardsInfo from "./MenuCardsInfo";

export default function MenuCards({ menuItems, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p>{menuItems?.title}</p>
        <div>
          {menuItems?.categories?.map((items) => (
            <MenuCards
              key={items?.title}
              menuItems={items}
              foodSelected={foodSelected}
            ></MenuCards>
          ))}
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full items-center">
          <p className="text-3xl font-bold">{menuItems?.title}</p>
          <button
            className="text-3xl mr-20 font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˄" : "˅"}
          </button>
        </div>
        <div className="h-4 my-3 bg-gray-200"></div>
      </div>
    );
  }

  if (foodSelected === "veg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full mb-5 mt-5 items-center">
          <p className="text-3xl font-bold">{menuItems?.title}</p>
          <button
            className="text-3xl mr-20 font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˄" : "˅"}
          </button>
        </div>
        <div>
          {menuItems?.itemCards
            ?.filter((food) => "isVeg" in food?.card?.info)
            .map((items) => (
              <MenuCardsInfo
                key={items?.card?.info?.id}
                MenuItems={items?.card?.info}
              ></MenuCardsInfo>
            ))}
        </div>
        <div className="h-4 my-3 bg-gray-200"></div>
      </div>
    );
  }

  if (foodSelected === "non-veg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full mb-5 mt-5 items-center">
          <p className="text-3xl font-bold">{menuItems?.title}</p>
          <button
            className="text-3xl mr-20 font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˄" : "˅"}
          </button>
        </div>
        <div>
          {menuItems?.itemCards
            ?.filter((food) => !("isVeg" in food?.card?.info))
            .map((items) => (
              <MenuCardsInfo
                key={items?.card?.info?.id}
                MenuItems={items?.card?.info}
              ></MenuCardsInfo>
            ))}
        </div>
        <div className="h-4 my-3 bg-gray-200"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between w-full mb-5 mt-5 items-center">
        <p className="text-3xl font-bold">{menuItems?.title}</p>
        <button
          className="text-3xl mr-20 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "˄" : "˅"}
        </button>
      </div>
      <div>
        {menuItems.itemCards.map((items) => (
          <MenuCardsInfo
            key={items?.card?.info?.id}
            MenuItems={items?.card?.info}
          ></MenuCardsInfo>
        ))}
      </div>
      <div className="h-4 my-3 bg-gray-200"></div>
    </div>
  );
}
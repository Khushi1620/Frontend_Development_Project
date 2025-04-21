import { useState } from "react";
import {
  addItems,
  incrementItems,
  decrementItems,
} from "../StoredComponents/cartSlicer";
import { useDispatch } from "react-redux";

export default function MenuCardsInfo({ MenuItems }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  function handleAddItems() {
    setCount(1);
    dispatch(addItems(MenuItems));
  }
  function handleIncrementItems() {
    setCount(count + 1);
    dispatch(incrementItems(MenuItems));
  }
  function handleDecrementItems() {
    setCount(count - 1);
    dispatch(decrementItems(MenuItems));
  }

  return (
    <>
      <div className="flex w-full justify-between mb-2 pb-2">
        <div className="w-[70%]">
          <p className="text-gray-700 font-semibold text-2xl mb-1">
            {MenuItems?.name}
          </p>
          <p className="font-bold text-xl">
            {"defaultPrice" in MenuItems
              ? "₹" + MenuItems.defaultPrice / 100
              : "₹" + MenuItems.price / 100}
          </p>
          <span className="text-green-600 font-bold">
            {MenuItems?.ratings?.aggregatedRating?.rating}
          </span>
          <span>
            {"(" + MenuItems?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>
          <p>{MenuItems?.description}</p>
        </div>
        <div className="w-[20%]">
          <img
            className="w-full h-36 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              MenuItems?.imageId
            }
            alt=""
          />
          {count === 0 ? (
            <button
              onClick={() => handleAddItems()}
              className="ml-8 font-bold shadow-md rounded-xl border border-white w-30 cursor-pointer text-green-600 px-4 py-2 bg-white"
            >
              ADD
            </button>
          ) : (
            <div className=" ml-8 font-bold rounded-xl w-30 flex gap-2 text-green-600 px-6 py-2 shadow-md border border-white bg-white justify-between">
              <button
                className="cursor-pointer"
                onClick={() => handleDecrementItems()}
              >
                -
              </button>
              <span>{count}</span>
              <button
                className="cursor-pointer"
                onClick={() => handleIncrementItems()}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className="mb-6 mt-2" />
    </>
  );
}

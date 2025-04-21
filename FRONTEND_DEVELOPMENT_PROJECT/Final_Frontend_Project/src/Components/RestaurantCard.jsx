export default function RestaurantCard({ RestaurantData }) {
  return (
    <div className="flex-none max-w-sm rounded-2xl bg-white drop-shadow-lg my-2 mx-2">
      <a target="_blank" href={RestaurantData?.cta?.link}>
        <div className="relative">
          <img
            className="h-48 w-82 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestaurantData?.info?.mediaFiles?.[0].url
            }
            alt=""
          ></img>
          <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0"></div>
          <p className="absolute bottom-2 w-[60%] left-2 text-white text-xl font-bold">
            {RestaurantData?.info?.name}
          </p>
          <p className="absolute bottom-2 right-2 font-bold text-white text-xl">
            {RestaurantData?.info?.rating?.value}
          </p>
        </div>
        <div className="relative h-50 mx-2 mb-4">
          <p className="absolute text-gray-600 top-2 left-0">
            {RestaurantData?.info?.cuisines.join(", ")}
          </p>
          <p className="absolute  text-gray-600 top-2 right-0">
            {RestaurantData?.info?.costForTwo}
          </p>
          <p className="absolute  text-gray-600 left-0 top-8">
            {RestaurantData?.info?.locality},{" "}
            {RestaurantData?.info?.locationInfo.city.name}
          </p>
          <p className="absolute  text-gray-600 right-0 top-8">
            {RestaurantData?.info?.locationInfo?.distanceString}
          </p>
          <button className="absolute text-gray-500 font-bold top-16 left-0 bg-gray-200 rounded-2xl px-3 text-base py-0.5">
            Table booking
          </button>
          <h1 className="absolute top-27 left-0 right-0 bg-[#1BA672] rounded-2xl font-bold py-2 px-3 text-white">
            {RestaurantData?.info?.offerInfoV2.otherOffers.offers?.[0]?.header}{" "}
            on pre-booking
          </h1>
          <h1 className="absolute top-40 left-0 right-0 bg-[#C8F9E5] rounded-2xl font-bold py-2 px-3 text-[#1BA672] mb-1">
            Up to 10% off with bank offers
          </h1>
        </div>
      </a>
    </div>
  );
}

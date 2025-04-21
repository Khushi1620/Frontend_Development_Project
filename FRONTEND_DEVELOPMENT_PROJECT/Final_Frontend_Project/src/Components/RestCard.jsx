import { Link } from "react-router";

export default function RestCard({ RestInfo }) {
  return (
    <Link to={"/city/delhi/"+RestInfo?.info?.id}>
    <div className="max-w-[280px] bg-white rounded-2xl pb-3 mb-2 transform transition duration-300 hover:scale-97">
      <img
        className="w-72 h-42 rounded-2xl object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          RestInfo.info.cloudinaryImageId
        }
        alt=""
      />
      <div className="w-[95%] mx-auto mt-2">
        <div className="font-bold w-[260px]  whitespace-nowrap text-ellipsis overflow-hidden text-xl">{RestInfo.info.name}</div>
        <div className="flex items-center gap-2">
          {/* rating  */}
          <div className="flex items-center justify-center w-5 h-5 bg-[#157f31] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-3 h-3"
            >
              <path
                d="M12 2l2.89 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.11-1.01L12 2z"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>
          <span className="text-lg">{RestInfo.info.avgRating}</span>
          <span className="font-semibold text-lg">
            {RestInfo.info.sla.slaString}
          </span>
        </div>
        <div className="text-gray-600 mt-1 text-ellipsis w-[210px] overflow-hidden font-semibold whitespace-nowrap">{RestInfo.info.cuisines.join(", ")}</div>
        <div className="text-gray-600 text-ellipsis w-[210px] overflow-hidden font-semibold whitespace-nowrap">{RestInfo.info.locality}</div>
      </div>
    </div>
    </Link>
  );
}

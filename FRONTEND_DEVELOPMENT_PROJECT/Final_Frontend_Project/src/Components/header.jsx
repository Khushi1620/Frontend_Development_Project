import logo from "../assets/logo.png";
import left from "../assets/left.avif";
import right from "../assets/right.avif";
import card1 from "../assets/card1.avif";
import card2 from "../assets/card2.avif";
import card3 from "../assets/card3.avif";
import card4 from "../assets/card4.avif";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-[#ff5200] font-serif">
      {/* 1st div of header  */}
      <div className="flex text-center justify-around py-8">
        <img className="w-40 h-12" src={logo} alt="" />
        <div className="flex text-white font-bold text-base gap-10 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>
          <a
            className="border border-white rounded-2xl py-3 px-4"
            target="_blank"
            href=""
          >
            Get the app
          </a>
          <button className="border py-3 px-8 border-black rounded-2xl bg-black">
            Sign in
          </button>
        </div>
      </div>
      {/* 2nd div of header  */}
      <div className="relative pt-16 pb-8">
        <img className="absolute top-0 left-0 h-123 w-60" src={left} alt="" />
        <img className="absolute top-0 right-0 h-123 w-60" src={right} alt="" />
        <div className="container text-white mx-auto max-w-[60%] text-5xl text-center font-bold">
          Order food & groceries.Discover best restaurants.Swiggy it !
        </div>
        <div className="max-w-[55%] container mx-auto flex gap-6 mt-10">
          <input
            className="font-bold w-[40%] text-balance py-4 rounded-2xl pl-4 bg-white"
            type="text"
            placeholder="Delhi, India"
          ></input>
          <input
            className="font-bold w-[55%] py-4 rounded-2xl text-balance pl-4 bg-white"
            type="text"
            placeholder="Search for restaurants, items or more"
          ></input>
        </div>
      </div>
      {/* 3rd div of header  */}
      <div className="flex container mx-auto max-w-[80%]">
        <Link to="/restaurants">
          <img src={card1} alt="" />
        </Link>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img src={card2} alt="" />
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img src={card3} alt="" />
        </a>
        <a href="https://www.swiggy.com/genie">
          <img src={card4} alt="" />
        </a>
      </div>
    </header>
  );
}
import FooterImage from "../assets/footer.avif";
import button1_footer from "../assets/button1_footer.avif";
import button2_footer from "../assets/button2_footer.avif";

export default function Footer() {
  return (
    <>
      <img className="my-20" src={FooterImage} alt="" />
      <div className="flex container max-w-[80%] mx-auto justify-between items-center my-20">
        <h1 className="text-3xl text-gray-600 font-bold">For better experience download the Swiggy app now</h1>
        <div className="flex gap-2">
        <a href="">
          <img src={button1_footer} alt="" />
        </a>
        <a href="">
          <img src={button2_footer} alt="" />
        </a>
        </div>
      </div>
    </>
  );
}

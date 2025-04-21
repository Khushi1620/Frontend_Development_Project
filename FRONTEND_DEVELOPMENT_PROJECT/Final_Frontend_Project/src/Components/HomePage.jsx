import Header from "./header.jsx";
import FoodOption from "./FoodOptions.jsx";
import GroceryOption from "./GroceryOptions.jsx";
import RestaurantOption from './RestaurantOptions.jsx';
import Footer from './Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <FoodOption></FoodOption>
      <GroceryOption></GroceryOption>
      <RestaurantOption></RestaurantOption>
      <Footer></Footer>
    </>
  );
}

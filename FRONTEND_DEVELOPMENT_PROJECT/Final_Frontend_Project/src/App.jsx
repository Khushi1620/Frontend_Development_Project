import "./App.css";
import HomePage from "./Components/HomePage.jsx";
import RestaurantList from "./Components/RestaurantList.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import SearchFood from "./Components/SearchFood.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantHeader from "./Components/RestaurantHeader.jsx";
import SecondaryHome from "./Components/SecondaryHome.jsx";
import { store } from "./StoredComponents/stores.jsx";
import { Provider } from "react-redux";
import Checkout from "./Components/Checkout.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
              <Route
                path="/restaurants"
                element={<RestaurantList></RestaurantList>}
              ></Route>
              <Route
                path="/city/delhi/:id"
                element={<RestaurantMenu></RestaurantMenu>}
              ></Route>
              <Route
                path="/city/delhi/:id/search"
                element={<SearchFood></SearchFood>}
              ></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

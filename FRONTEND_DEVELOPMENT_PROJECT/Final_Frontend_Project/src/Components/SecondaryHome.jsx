import RestaurantHeader from "./RestaurantHeader";
import { Outlet } from "react-router";

export default function SecondaryHome() {
    return (
        <div>
            <RestaurantHeader></RestaurantHeader>
            <Outlet></Outlet>
        </div>
    )
}
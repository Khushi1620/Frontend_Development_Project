export default function FoodCard({FoodData}) {

    return(
        <div className="flex-none">
        <a href={FoodData?.action?.link}>
        <img className="h-45 w-36 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + FoodData?.imageId} alt="" />
        </a>
        </div>
    )
}
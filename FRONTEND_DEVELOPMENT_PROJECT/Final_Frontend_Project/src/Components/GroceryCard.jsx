export default function GroceryCard({GroceryData}) {

    return(
        <div className="flex-none">
        <a href={GroceryData?.action?.link}>
        <img className="h-50 w-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + GroceryData?.imageId} alt="" />
        </a>
        <h2 className="text-center font-bold">{GroceryData?.action?.text}</h2>
        </div>
    )
}
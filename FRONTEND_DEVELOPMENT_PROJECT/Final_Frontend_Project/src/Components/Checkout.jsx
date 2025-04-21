import { useSelector } from "react-redux"

export default function Checkout() {

   const items = useSelector(state=> state.cartSlice.items);

    return (
        <div>
            {
                items.map(value => <div>{value.name}</div>)
            }
        </div>
    )
}
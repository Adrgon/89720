import { useState } from "react"

function CartCounter(){
    //console.log(count)
    const [count, setCount] = useState(0)
    //let count = 0

    const incrementar = () => {
        setCount(count + 1)
        console.log(count)
    }
    return (
        <div>
            <span>Items en carrito: {count} </span>
            <button onClick={incrementar}>+</button>
        </div>
    )
}


export default CartCounter;

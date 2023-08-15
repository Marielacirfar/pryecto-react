import { useState } from "react"

const ItemCount =({stock, initial, onAdd})=> {
    const[quantity, setQuantity]= useState(initial)
    const increment =()=>{
        if(quantity< stock){
            setQuantity(quantity+1)
        }
    }
    const decrement =()=> {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    return(
        <div className="Counter">
            <div className="flex items-center">
                <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " onClick={decrement}>-</button>
                <h4 className="p-2 m-10">{quantity}</h4>
                <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={increment}>+</button>
            </div>
            <div>
                <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={()=> onAdd(quantity)} disabled={!stock}>
                Agregar al carrito    
                </button>
            </div>
        </div>
    )
}
export default ItemCount
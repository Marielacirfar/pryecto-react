import imagen from "./carrito.png"
function CartWidget(){
    return(
        <>
        <div className="">
            <div className="flex justify-end">
                <img src={imagen} alt="" className="w-20 h-20 m-4 p-2 bg-yellow-50"/>
                <span className="m-4 p-2 bg-yellow-50">0</span>
            </div>
        </div>
        </>
    )
};
export default CartWidget;
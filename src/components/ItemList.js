import Item from "./Item";
const ItemList =({products})=> {
    return(
        <div className="flex flex-row ...">
            {products.map(prod=> <Item Key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList;
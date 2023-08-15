import { useEffect, useState } from "react"
import {getProductById} from "./asyncMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailConteiner =() =>{
    const [product, setProduct] =useState(null)
    const {itemId} = useParams();
    useEffect(()=> {
        getProductById(itemId)
        .then(response=> {
            setProduct(response)
    })
    .catch(error => {
        console.error(error)
    })
    }, [])
    return(
        <div className="ItemDetailConteiner">
            <ItemDetail {...product}/>

        </div>
    )
}
export default ItemDetailConteiner
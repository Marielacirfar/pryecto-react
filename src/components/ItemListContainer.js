import React, { useEffect, useState } from 'react'
import { getProducts } from './asyncMock';
import ItemList from './ItemList'
function ItemListContainer(greeting){
    const [products, setProducts]=useState([])
    useEffect(()=> {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error=> {
            console.error(error)
        })
    }, [])
    return(
        <div className="flex flex-wrap gap-4">
            <h2>{greeting.mensaje}</h2>
            <ItemList products ={products}/>
        </div>
        
    )
}

export default ItemListContainer;
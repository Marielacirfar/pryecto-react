import React, { useEffect, useState } from 'react';
import { getProducts, getProductByCategory } from './asyncMock';
import ItemList from './ItemList';
import {useParams} from "react-router-dom";
const ItemListContainer =({greeting})=>{
    const [products, setProducts]=useState([])
    const {categoryId}= useParams();
    useEffect(()=> {
        const asynFunc = categoryId ? getProductByCategory : getProducts;
        asynFunc (categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error=> {
            console.error(error)
        })
    }, [categoryId])
    return(
        <div className="flex flex-wrap gap-4">
            <h2>{greeting}</h2>
            <ItemList products ={products}/>
        </div>
        
    )
}

export default ItemListContainer;
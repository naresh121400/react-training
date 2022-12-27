import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';
import { ProductsTable } from './ProductsTable';
import { ParentComp } from './ParentComp';

export const productsContext = React.createContext();
export const Products = () => {
    
  const[products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <productsContext.Provider value={products}>
        {/* <ProductsTable products={products}/> */}
        <ProductsGrid products={products}/>
        {/* <ParentComp /> */}
    </productsContext.Provider>
   
  )
}

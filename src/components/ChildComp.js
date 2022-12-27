import React, { useContext, useState } from 'react'
import { productsContext } from './Products'

export const ChildComp = () => {
  let products = useContext(productsContext);
  const[search, setSearch] = useState(""); 
  return (
    <>
        <input type="text" value={search} style={{margin: "50px"}} placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
    <table class="table">
            <thead>
                <tr>
                <th scope="col">product id</th>
                <th scope="col">product name</th>
                <th scope="col">product price</th>
                <th scope="col">product desc</th>
                <th scope="col">product image</th>
                </tr>
            </thead>
            <tbody>
                   {
                       products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                       .map(product => {
                            const{id, title, price, description, image} = product;
                            return (
                                <tr>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{price}</td>
                                    <td>{description.substring(0, 200)}</td>
                                    <td>
                                        <img src={image} width="50" height="50" alt="product"/>
                                    </td>
                                </tr>
                            )
                       })
                   }
                
            </tbody>
        </table>
    </>
  )
}

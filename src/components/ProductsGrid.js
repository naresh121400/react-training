import React, { useState } from 'react'

export const ProductsGrid = (props) => {
  const[search, setSearch] = useState("");
  
  return (
    <>
        <input type="text" value={search} style={{margin: "50px"}} placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
        <div class="container">
            <div class="row">
            {
                props.products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                .map(product => {
                    const{id, title, price, description, image } = product;
                    return(
                        <div class="col-xs-6 col-md-4" key={id}>
                            <div className="card" style={{width: "18rem", marginBottom: "10px"}}>
                                <img className="card-img-top" src={image} alt="Card image cap" style={{height:"200px"}}/>
                                <div className="card-body">
                                    <h6 className="card-title">{title.substring(0, 15)}</h6>
                                    <p class="card-text">{description.substring(0, 50)}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </div>
    </>
  )
}

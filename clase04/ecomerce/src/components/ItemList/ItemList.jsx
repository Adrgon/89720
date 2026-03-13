import React from 'react'
import "./ItemList.css"
import Item from "../Item/Item.jsx"

function ItemList({products}) {
  return (
    <div className="item-grid">
      {products.map((product)=>(
        <Item  
          product={product}
          key={product.id}
        />
      ))}
    </div>
  )
}

export default ItemList

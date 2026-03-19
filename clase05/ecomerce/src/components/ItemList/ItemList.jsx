import React from 'react'
import "./ItemList.css"
import Item from "../Item/Item.jsx"

function ItemList({ products, onSelectProduct }) {
  return (
    <div className="item-grid">
      {products.map((product)=>(
        <Item  
          product={product}
          onSelect={onSelectProduct}
          key={product.id}
        />
      ))}
    </div>
  )
}

export default ItemList

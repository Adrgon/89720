import React, { useState } from 'react'
import ProductCard from './ProductCard';

const PRODUCTS = [
  {
    id: 1,
    name: "remera",
    price: 20.99,
  },
  {
    id: 2,
    name: "pantalon",
    price: 40.99,
  },
  {
    id: 3,
    name: "zapatillas",
    price: 50.99,
  },
];

function ProductList({ onAddToCart }) {
  const [products] = useState(PRODUCTS);
  console.log(products);
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          onAddToCart={() => onAddToCart(item)}
        >
          <p>Producto id: {item.id}</p>
        </ProductCard>
      ))}
    </div>
  );
}

export default ProductList

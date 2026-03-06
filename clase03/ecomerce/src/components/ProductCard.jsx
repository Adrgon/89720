import Card from "./Card"


function ProductCard({name, price, onAddToCart ,children}) {
  return (
    <Card title={name}>
        {children}
        <p>Precio: ${price}</p>
        <button onClick={onAddToCart}>Agregar al carrito</button>
    </Card>
  )
}

export default ProductCard

import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer({
  greetings = "Explorar productos",
}) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(()=>{
    const asyncFunction = categoryId ? getProductsByCategory :  getProducts
    asyncFunction(categoryId)  
    .then((res)=>{
        console.log(res)
        setProducts(res)
      })
      .catch((err)=>{
        console.log("Error al obtener los productos", err)
      })
      .finally(()=>{
        setLoading(false)
        console.log("fin de la peticion")
      })
  },[categoryId])


  return (
    <section className='catalog'>
      <header className='catalog__header'>
        <h2>{greetings}</h2>
      </header>
      {loading 
        ? (
          <div className='status'>Cargando productos....</div>)
        : products.length === 0 ? (
          <div className='status'>No hay productos disponibles </div>
        ) : (
          <ItemList products={products} />
        )
      }


    </section>
  )
}

export default ItemListContainer

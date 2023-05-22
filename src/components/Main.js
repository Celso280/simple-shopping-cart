import React from 'react'
import Product from './Product'

function Main(props) {
    const {cartItems, products, onAdd, onRemove} = props
  return (
    <div className='block col-2'>
        <h2>Products</h2>
        <div className='row'>
            {products.map((product) => (
                <Product 
                    key={product.id} 
                    item={cartItems.find((x) => x.id === product.id)}
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    product={product}>
                </Product>
            ))}
        </div>
    </div>
  )
}

export default Main
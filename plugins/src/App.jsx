import React from 'react'
import ProductManager from './ProductManager'
import { CartProvider } from './Context/Cartcontext'
import Cart from './Cartpage'

const App = () => {
  return (
    <div>
      <CartProvider>
      <ProductManager />
      <Cart />
      </CartProvider>
    </div>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BrowseProduct from './BrowseProduct.jsx';
import ProductManager from './ProductManager.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails.jsx';
import { CartProvider } from './Context/Cartcontext.jsx';
import Cart from './Cartpage.jsx';
import ReviewProduct from './ReviewProduct.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const browseElement = document.getElementById('browse-plugin');
if (browseElement) {
  ReactDOM.createRoot(browseElement)
    .render(
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<BrowseProduct />} path='/' />
            <Route element={<ProductDetails />} path='productdetails/:id' />
            <Route element={<Cart />} path='cart' />
            <Route element={<ReviewProduct />} path='reviewproduct' />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    )
}
const manageElement = document.getElementById('manage-plugin');
if (manageElement) {
  ReactDOM.createRoot(manageElement)
    .render(
      <ProductManager />
    )
}
const cartElement = document.getElementById('cart-plugin');
if (cartElement) {
  ReactDOM.createRoot(cartElement)
    .render(
      <ProductManager />
    )
}
const ratingElement = document.getElementById('rating-plugin');
if (ratingElement) {
  ReactDOM.createRoot(ratingElement)
    .render(
      <ProductManager />
    )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BrowseProduct from './BrowseProduct.jsx';
import ProductManager from './ProductManager.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const browseElement = document.getElementById('browse-plugin');
if (browseElement) {
  ReactDOM.createRoot(browseElement)
    .render(
      <BrowseProduct />
    )
}

const manageElement = document.getElementById('manage-plugin');
if (manageElement) {
  ReactDOM.createRoot(manageElement)
    .render(
      <ProductManager />
    )
}
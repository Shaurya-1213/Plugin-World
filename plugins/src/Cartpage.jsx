import React, { useEffect, useState } from 'react'
import useCartContext from './Context/Cartcontext';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Cart = () => {

  const { id } = useParams();
  const [productList, setproductList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:3000/product/getall');

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setproductList(data);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    isInCart,
    getCartTotal,
    getCartItemsCount,
  } = useCartContext();

  const displayCartItems = () => {
    if (getCartItemsCount() === 0) return (
      <div className="text-center">
        {/* <p alt="login form" className='rounded-start mt-4 w-25 text-center' /> */}
        <h3>Your Cart is Currently Empty!</h3>
        <p className="text-muted">Before proceed to checkout you must add some products to your shopping cart. <br />You will fill a lot of interesting products on our "Product" page.</p>
        <Link to="/product" className="btn rounded-pill" style={{ backgroundColor: "#4BCCF2", color: "#fff" }} >Return To Shop</Link>
      </div>
    );
    return cartItems.map((item) => (
      <div key={item._id} className=" mb-4">

    

        <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
          <img src={'http://localhost:3000/' + item.image} alt="" className="w-auto mx-auto  h-24  py-1 " style={{ objectFit: "cover" }} />
                      

                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">{item.pname}</h6>
                      <h6 className="text-black mb-0">{item.pcategory}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <div className="">
          <div className="input-group flex">
            <button className="btn btn-dark rounded text-xl text-white px-3 py-2" onClick={e => addItemToCart(item)}>+ </button>
            <input type="text" className=" w-12 px-2 mx-2 text-center" value={item.quantity} />
            <button className="btn btn-dark  rounded text-xl text-white px-3 py-2" onClick={e => removeItemFromCart(item)}>-</button>
        
          </div>
        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h2 className="my-2"> ₹ {item.pprice}</h2>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-muted">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                  </div>
                  <hr className="my-4" />
          
       </div>
 
    ));
  }
  return (
    <>


<section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div
          className="card card-registration card-registration-2"
          style={{ borderRadius: 15 }}
        >
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                  </div>

                  {displayCartItems()}
                  {/* <hr className="my-4" /> */}
                
               
                
                  <div className="pt-5">
                    <h6 className="mb-0">
                      <Link to="/product" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2" />
                        Back to shop
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 bg-secondary text-white ">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-4">
                  <h5 className="text-uppercase">Total items</h5>
                      <p>Items: {getCartItemsCount()}</p>
                  </div>
                  
                  <h5 className="text-uppercase mb-3">Give code</h5>
                  <div className="mb-5">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        type="text"
                        id="form3Examplea2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Examplea2">
                        Enter your code
                      </label>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <p>Total: {getCartTotal()}</p>
                  </div>
                  <Link to ='/Checkout'
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </>
  )
}

export default Cart
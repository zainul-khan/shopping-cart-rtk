import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Loader from '../components/Loader';
import { addToCart } from '../slices/cartItems';
import { fetchItems } from '../api/api';
import { recievedError, requestSent, responseRecieved } from '../slices/utils';

const Home = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const isOpen = useSelector(state => state.cartToggle.isOpen);
  const loading = useSelector(state => state.utils.loading);

  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {
      
      dispatch(requestSent())
      let res = await fetchItems();
      setData(res);
      dispatch(responseRecieved())

    } catch (error) {
      console.log("error=>", error);
      dispatch(recievedError())
      dispatch(responseRecieved());
    }

  }

  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          {isOpen && <Cart />}
          {data && data.length > 0 ? (
            <div className="container">
              <div className="row">
                {data.map((val) => {
                  return (
                    <div className="col-md-3" key={val.id}>
                      <div className="card my-4" style={{ width: "20rem", height: "500px" }}>
                        <img
                          src={val.image}
                          alt="img"
                          height="250px"
                          width="250px"
                          style={{ objectFit: "cover" }}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            {val.title.length > 10 ? val.title.slice(0, 10) + "..." : val.title}
                          </h5>
                          <h6 className="card-text">{val.category}</h6>
                          <p className="card-text">{val.price}</p>
                          <p className="card-text">
                            {val.description.length > 40 ? val.description.slice(0, 40) + "...." : val.description}
                          </p>
                          <button className="btn btn-dark" onClick={() => handleAddToCart(val)}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <h1>No data</h1>
          )}
        </>
      )}
    </>
  );
  
}

export default Home
import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleCart } from '../slices/cartToggler';


const Navbar = () => {

      const dispatch = useDispatch();

    
    const openCart = () => {
        dispatch(toggleCart())
      }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
                <div className="container-fluid">
                    <p className="navbar-brand">Redux Cart Z</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <button className='btn btn-danger' onClick={openCart}>View Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
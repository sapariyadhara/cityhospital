import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/slice/cartSlice';
import { addToFav } from '../../redux/action/myfav.action';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from '../../Context/ThemeContext';

function MedicinesDetails(props) {
    const theme = useContext(ThemeContext)
    const { id } = useParams()
    const dispatch = useDispatch()
    const mediDetails = useSelector((state) => state.Medicine);
    console.log(mediDetails);

    let fData = mediDetails.medicineD.filter((v) => v.id === parseInt(id))
    console.log(fData, 'fdata');

    const handleAddtoCart1 = (id) => {
        dispatch(addToCart({ pid: id, qty: 1 }))
    }

    const handleaddToFav = (id) => {
        dispatch(addToFav(id))
    }
    return (
        <div>
            <section className={`h-100 gradient-custom ${theme.theme}`}>
                <div className={`container py-5 ${theme.theme}`}>
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Medicine Details</h5>
                                </div>
                                <div className="card-body">
                                    {/* Single item */}
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/* Image */}
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src="https://www.susansunfilteredwit.com/wp-content/uploads/2020/12/shutterstock_1409823341.png" className="w-100" alt="Blue Jeans Jacket" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                                </a>
                                            </div>
                                            {/* Image */}
                                        </div>
                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* Data */}
                                            <p><strong>{fData[0].name}</strong></p>
                                            <p>Price : ${fData[0].price}</p>
                                            <p>Expiry Date : {fData[0].expiry}</p>
                                            <p> {fData[0].desc}</p>
                                            <button onClick={() => handleAddtoCart1(fData[0].id)} type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" >
                                                Add to Cart
                                            </button>
                                            <label  id="switch" className="switch">
                                                <input type="checkbox" />
                                                <FavoriteIcon style={{border : '1px solid #FF6337' , borderRadius : '5px' , padding : '3px' , fontSize : '31px' , marginTop : '-6px'}} id='sliderround' className="slider round" onClick={() => handleaddToFav(fData[0].id)} />
                                            </label>

                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* Quantity */}
                                            <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                <button className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <div className="form-outline">
                                                    <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control" />
                                                    <label className="form-label" htmlFor="form1">Quantity</label>
                                                </div>
                                                <button className="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* Quantity */}
                                            {/* Price */}
                                            <p className="text-start text-md-center">
                                                <strong>${fData[0].price}</strong>
                                            </p>
                                            {/* Price */}
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p><strong>Expected shipping delivery</strong></p>
                                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p><strong>We accept</strong></p>
                                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>${fData[0].price}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Gratis</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>${fData[0].price}</strong></span>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default MedicinesDetails;
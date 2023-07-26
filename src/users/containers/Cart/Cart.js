import React from 'react';
import { H2, P } from '../../components/Ui/Hadding/Haddinds.style';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { incCartOty } from '../../../redux/action/cart.action';

function Cart(props) {
    let mediData = useSelector((state) => state.Medicine)
    let cartData = useSelector((state) => state.cart)
    let dispatch = useDispatch()

    console.log(mediData ,cartData );

    let cartitems = cartData.items.map((v) => {
        let medicineD = mediData.medicineD.find((m) => m.id === v.pid)
        let mData = {...medicineD , ...v}

        return mData
    })

    console.log(cartitems);

    const handleInc = (id) => {
        dispatch(incCartOty(id))
    }

    return (
        <>
            <section id="cart" className="cart">
                <div className="container">
                    <div className="section-title">
                        <H2>Cart</H2>
                    </div>
                    {/* <div>
                        <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</a></h5>
                        <hr />
                    </div> */}

                    {
                        cartitems.map((c, i) => {
                            return (
                                <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="ms-3">
                                                <h5> {c.name} </h5>
                                                <p className="small mb-0">{c.desc.substring(0 , 50)}{'...'}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: 200 }}>
                                              
                                                <h5 className="fw-normal mb-0">
                                                     <Button>-</Button>
                                                      {c.qty} 
                                                      <Button onClick={() => handleInc(c.pid)}>+</Button>
                                                      </h5>
                                            </div>
                                            <div style={{ width: 80 }}>
                                                <h5 className="mb-0"> {c.price} </h5>
                                            </div>
                                            <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )

                        })
                    }
                  

                </div>
            </section>
        </>
    );
}

export default Cart;
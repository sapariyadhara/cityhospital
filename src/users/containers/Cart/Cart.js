import React from "react";
import { H2, P } from "../../components/Ui/Hadding/Haddinds.style";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  decCartQty,
  deleteToCart,
  incCartQty,
} from "../../../redux/action/cart.action";

function Cart(props) {
  let mediData = useSelector((state) => state.Medicine);
  let cartData = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  console.log(mediData, cartData);

  let cartitems = cartData.items.map((v) => {
    let medicineD = mediData.medicineD.find((m) => m.id === v.pid);
    let mData = { ...medicineD, ...v };

    return mData;
  });

  console.log(cartitems, "add");

  let totalBill = cartitems.map((v) => {
    let total = v.price * v.qty;

    console.log(total);

    return total;
  });
  console.log(totalBill);

  // let bb = tt.reduce((acc , v) => acc + v , 0)
  // console.log(bb);
  const handleInc = (id) => {
    dispatch(incCartQty(id));
  };

  const handleDec = (id) => {
    dispatch(decCartQty(id));
  };

  const handleDeletetoCart = (data) => {
    dispatch(deleteToCart(data));
    console.log(data);
  };
  return (
    <>
      <section id="cart" className="cart">
        <div className="container">
          <div className="section-title">
            <H2>Cart</H2>
          </div>
          <div>
            <h5 className="mb-3">
              <a href="#!" className="text-body">
                <i className="fas fa-long-arrow-alt-left me-2" />
                Continue shopping
              </a>
            </h5>
            <hr />
          </div>
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p class="mb-1">Shopping cart</p>
            </div>
          </div>

          {cartitems.map((c, i) => {
            return (
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="ms-3">
                        <h5> {c.name} </h5>
                        <p className="small mb-0">
                          {c.desc.substring(0, 50)}
                          {"..."}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <div style={{ width: 200 }}>
                        <h5 className="fw-normal mb-0">
                          {c.qty > 1 ? (
                            <Button onClick={() => handleDec(c.pid)}>-</Button>
                          ) : (
                            <Button
                              disabled={true}
                              onClick={() => handleDec(c.pid)}
                            >
                              -
                            </Button>
                          )}
                          {/* <Button onClick={() => handleDec(c.pid)}>-</Button> */}
                          <span style={{ margin: "5px" }}>{c.qty} </span>
                          <Button onClick={() => handleInc(c.pid)}>+</Button>
                        </h5>
                      </div>
                      <div style={{ width: 80 }}>
                        <h5 className="mb-0">
                          {" "}
                          {c.price ? c.price * c.qty : c.price}{" "}
                        </h5>
                      </div>

                      <Button onClick={() => handleDeletetoCart(c)}>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <i className="fas fa-trash-alt" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-3">
                    <h5>Total Payable Amount </h5>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div style={{ width: 80, marginRight: "40px" }}>
                    <h5 className="mb-0">
                      {totalBill.reduce((acc, v) => acc + v, 0)}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;

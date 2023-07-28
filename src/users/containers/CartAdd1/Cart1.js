import React, { useEffect, useState } from 'react';
import { H2 } from '../../components/Ui/Hadding/Haddinds.style';
import { Button } from "reactstrap";

function Cart1(props) {
  const [mediData, setMediData] = useState([])
  const [cartD, setCartD] = useState([])

  useEffect(() => {
    try {
      fetch("http://localhost:3004/medicines")
        .then((response) => response.json())
        .then((data) => setMediData(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }


    let cartDataGet = JSON.parse(localStorage.getItem("cart"))
    setCartD(cartDataGet)
    // console.log(cartDataGet);
  }, [])
  console.log(mediData);
  console.log(cartD);

  let cData = cartD.map((v) => {
    let mediDatas = mediData.find((c) => c.id === v.pid)
    console.log(mediDatas);
    let mData = { ...mediDatas, ...v }

    return mData
  })
  console.log(cData);

  const handleDec = (id) => {
      console.log(id);
      
  }

  return (
    <>
      <section id="cart" className="cart">
        <div className="container">
          <div className="section-title">
            <H2>Cart1</H2>
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


          {
            cData.map((v) => {
              return (
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="ms-3">
                          <h5>{v.name}</h5>
                          <p className="small mb-0">{v.desc}
                            {"..."}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 200 }}>

                          <h5 className="fw-normal mb-0">
                            <Button onClick={() => handleDec(v.id)}>-</Button>
                            {v.qty}
                            <Button>+</Button>
                          </h5>

                        </div>
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">{v.price}</h5>
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

export default Cart1;
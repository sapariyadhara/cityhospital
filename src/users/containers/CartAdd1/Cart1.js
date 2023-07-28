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
  // console.log(cData);

  const handleDec = (id) => {
      console.log(cData);
      let index = cData.findIndex((v) => v.pid === id)
      let qtyDec =  cData[index].qty--
      console.log(qtyDec);
      localStorage.setItem("cart" , JSON.stringify(cData))
      setCartD(cData)
  }

  const handleInc = (id) => {
    console.log(cData);
      let index = cData.findIndex((v) => v.pid === id)
      let qtyDec =  cData[index].qty++
      console.log(qtyDec);
      localStorage.setItem("cart" , JSON.stringify(cData))
      setCartD(cData)
  }

  const handleDelete = (id) => {
    console.log(cData);
    let DeletData = cData.filter((v) => v.id !== id)
    console.log(DeletData);
    localStorage.setItem("cart" , JSON.stringify(DeletData))
    setCartD(DeletData)
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
                          {
                            v.qty > 1 ?  <Button onClick={() => handleDec(v.id)}>-</Button> :
                            <Button disabled={true} onClick={() => handleDec(v.id)}>-</Button>
                          }                      
                            <span style={{ margin: "5px" }}>{v.qty} </span>
                            <Button onClick={() => handleInc(v.id)}>+</Button>
                          </h5>

                        </div>
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">{v.price ? v.price * v.qty : v.price}</h5>
                        </div>
                       <Button onClick={() => handleDelete(v.id)}> <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt" /></a></Button>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })
          }

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
                   { cData.reduce((acc , v ) => acc + v.price * v.qty , 0 )}
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

export default Cart1;
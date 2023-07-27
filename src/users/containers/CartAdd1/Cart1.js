import React from 'react';
import { H2 } from '../../components/Ui/Hadding/Haddinds.style';

function Cart1(props) {
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
          </div>
          </section>
        </>
    );
}

export default Cart1;
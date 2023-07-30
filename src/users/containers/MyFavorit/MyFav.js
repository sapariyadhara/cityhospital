import React from 'react';
import { H2 } from '../../components/Ui/Hadding/Haddinds.style';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonToolbar } from 'reactstrap';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { removeToFav } from '../../../redux/action/myfav.action';


function MyFav(props) {
  const dispatch = useDispatch()
    const mediData = useSelector((state) => state.Medicine)
    const favData = useSelector((state) => state.myfav )
    console.log(mediData , favData);

    let newFavData = favData.fav.map((v) => {
        let fData =     mediData.medicineD.find((m) => m.id === v.pid)
        let newD = {...fData , ...v}

        return newD

    })

    console.log(newFavData , 'newFavData');

    const handleDelete = (id) => {
      dispatch(removeToFav(id))
    }

    return (
        <>
            <section id="cart" className="cart">
                <div className="container">
                    <div className="section-title">
                        <H2>Favorites</H2>
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

                    {newFavData.map((c, i) => {
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
                    
                          <span style={{ margin: "5px" }}>{c.qty} </span>
                         
                        </h5>
                      </div>
                      <div style={{ width: 80 }}>
                        <h5 className="mb-0">
                          {" "}
                          {c.price}{" "}
                        </h5>
                      </div>

                      <FavoriteBorderOutlinedIcon onClick={() => handleDelete(c.id)}/>
                     
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
                </div>
            </section>  
        </>
    );
}

export default MyFav;
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/action/department.action";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, Row } from "reactstrap";
import { fetchDepartments } from '../../redux/slice/departmentSlice';
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";



function Departments(props) {
  const theme = useContext(ThemeContext)

  const dispatch = useDispatch()
  const dipartData = useSelector(state => state.department)
  console.log(dipartData, 'dipartData');


  useEffect(() => {
    // dispatch(getData());
    dispatch(fetchDepartments())
  }, []);


  return (
    <div>
      <main>
        <section id="departments" className={`departments ${theme.theme}`}>
          <div className="container">
            <div className="section-title">
              <h2>Departments</h2>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  {
                    dipartData.depart.map((c, i) => {
                      return (
                        <>

                          <li className="nav-item">
                            <a
                              className={i === 0 ? "nav-link active show" : "nav-link"}
                              data-bs-toggle="tab"
                              // to={'#tab-'+c.id}
                              href={`#tab-${i + 1}`}

                            >
                              {c.name}

                            </a>
                          </li>

                        </>

                      )
                    })
                  }
                </ul>
              </div>

              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  {
                    dipartData.depart.map((c, i) => {
                      return (
                        <div className={i === 0 ? 'tab-pane active show' : 'tab-pane'} id={`tab-${i + 1}`}>
                          <div className="row">
                            <div className="col-lg-8 details order-2 order-lg-1">
                              <h3>{c.name}</h3>
                              <p className="fst-italic">
                                {c.desc}
                              </p>
                            </div>
                            <div className="col-lg-4 text-center order-1 order-lg-2">
                              <img
                                src={`../assets/img/departments-${c.id}.jpg`}
                                alt
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }


                </div>
              </div>

            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default Departments;

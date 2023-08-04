import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinkCustom from "./Ui/Link/LinkCustom";
// import { LinkT } from "./Ui/Link/Link.style";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from "../../Context/ThemeContext";
import { Button } from "reactstrap";







function Header({ count1 }) {
  const theme = useContext(ThemeContext)
  console.log(theme);

  const [countData, setCountData] = useState([])
  let localData = localStorage.getItem("status");
  let cartData = useSelector(state => state.cart)
  const favData = useSelector((state) => state.myfav )
  
  // let c1 = JSON.parse(localStorage.getItem("cart"))
  // console.log(c1);
  // if(count === 0){
  //   let count = c1.reduce((acc , v , i) => acc + v.qty ,0)
  //   console.log(count);
  //   localStorage.setItem("count1" , JSON.stringify(count))
  // }


  // console.log(count);
  useEffect(() => {
    try {
      fetch("http://localhost:3004/medicines")
        .then((response) => response.json())
        .then((data) => setCountData(data))
        .catch((error) => console.log(error))
    } catch (error) {
      console.log(error)
    }

  }, [])

  let favCount = 0

  if(favData.fav){
    favCount = favData.fav.reduce((acc , v , i) => acc + v.qty ,0)
  }

  ///////////////////////////////add to cart with redux///////////////////

  console.log(cartData);
  let countCart = 0

  if (cartData.items) {

    countCart = cartData.items.reduce((acc, v, i) => acc + v.qty, 0)
  }

  // console.log(countCart);
  ///////////////////////////////////////////////////////////////////////////

  const handleLogout = () => {
    localStorage.removeItem("status");
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      background: '#FF6337',
      padding: '0 4px',
    },

  }));

  const shapeStyles = { bgcolor: 'primary.main', width: 30, height: 30 };
  const shapeCircleStyles = { borderRadius: '50%' };
  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );


  return (
    <div>
      <div className="main-header">
        <div id="topbar" className={`d-flex align-items-center fixed-top ${theme.theme}`}>
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" />{" "}
              <a href="mailto:contact@example.com">cityhospital@example.com</a>
              <i className="bi bi-phone" /> +91 9988776655
            </div>

            <div className="d-none d-lg-flex social-links align-items-center">
              <Button onClick={() => theme.toogletheme(theme.theme)}>Toogle Theme</Button>
             <Link to={'/MyFav'}>
             <Badge color="warning" overlap="circular" badgeContent={favCount}>
            <FavoriteIcon />
              </Badge>
              </Link>

              <Link to={'/Cart1'}>
                <IconButton aria-label="cart" style={{ marginRight: 'auto' }}>
                  <StyledBadge badgeContent={count1} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>


              <Link to={'/Cart'}>
                <IconButton aria-label="cart" style={{ marginRight: 'auto' }}>
                  <StyledBadge badgeContent={countCart} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <div className="logo">
              <Link to={"/"}>
                <h1 className="logo me-auto">City</h1>
                <br />
                <h2 className="logo-tiny-text me-auto">
                  Multispeciality Hospital
                </h2>
              </Link>
            </div>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  {/* <LinkCustom to={"/"} text="Home" />
                  Home */}
                  {/* </LinkCustom> */}
                  <Link className="nav-link scrollto" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto" to={"/Departments"}>
                    Departments
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto" to={"/Medicine"}>
                    Medicine
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto" to={"/Medicine1"}>
                    Medicine1
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto" to={"/Doctors"}>
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto " to={"/about"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto" to={"/Contect1"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto" to={"/Counter"}>
                    Counter
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto" to={"/Counter1"}>
                    Counter1
                  </Link>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <Link to={"/Appoinment "} className="appointment-btn scrollto">
              <span className="d-none d-md-inline">Make an</span>
              Appointment
            </Link>

            {localData ? (
              <Link
                to={"/Auth"}
                className="appointment-btn scrollto"
                onClick={handleLogout}
              >
                <span className="d-none d-md-inline">Logout</span>
              </Link>
            ) : (
              <Link to={"/Auth"} className="appointment-btn scrollto">
                {" "}
                <span className="d-none d-md-inline">Login/ Signup</span>
              </Link>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;

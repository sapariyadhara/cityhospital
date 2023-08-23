import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from "../../Context/ThemeContext";
import { logOutRequest } from "../../redux/action/auth.action";

import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';




function Header(props) {
  // console.log(theme);
  const theme = useContext(ThemeContext)
  //log out
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const [countData, setCountData] = useState([])
  let cartData = useSelector(state => state.cart)
  const favData = useSelector((state) => state.myfav)

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

  if (favData.fav) {
    favCount = favData.fav.reduce((acc, v, i) => acc + v.qty, 0)
  }

  ///////////////////////////////add to cart with redux///////////////////

  // console.log(cartData);
  let countCart = 0

  if (cartData.items) {

    countCart = cartData.items.reduce((acc, v, i) => acc + v.qty, 0)
  }

  // console.log(countCart);
  ///////////////////////////////////////////////////////////////////////////

  const handleLogout = () => {
    dispatch(logOutRequest())
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
            <div className={`contact-info d-flex align-items-center`}>
              <i className="bi bi-envelope" />{" "}
              <a href="mailto:contact@example.com">cityhospital@example.com</a>
              <i className="bi bi-phone" /> +91 9988776655
            </div>

            <div className="d-none d-lg-flex social-links align-items-center">

              <Link to={'/MyFav'}>
                <Badge color="warning" overlap="circular" badgeContent={favCount}>
                  <FavoriteIcon />
                </Badge>
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
              {
                theme.theme === 'light' ?
                  <button className="darkbtn" onClick={() => theme.toogletheme(theme.theme)} >
                    Dark Mode
                  </button> :
                  <button className="darkbtn" onClick={() => theme.toogletheme(theme.theme)} >
                    Light Mode
                  </button>
              }

            </div>

          </div>
        </div>
        <header id="header" className={`fixed-top ${theme.theme}`}>
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
                  <Link className="nav-link scrollto" to={"/CallbackFun"}>
                  CallbackFun
                  </Link>
                </li>
                <li>
                  <Link className="nav-link scrollto" to={"/useRef"}>
                  UseRef Example 
                  </Link>
                </li>
              </ul>

            </nav>
            <Link to={"/Appoinment "} className="appointment-btn scrollto">
              <span className="d-none d-md-inline">Make an</span>
              Appointment
            </Link>

            {auth.user ? (
              <Link
                to={"/Auth"}
                className="auth-btn"
                onClick={handleLogout}
              >
                <span className="">Logout</span>
              </Link>
            ) : (
              <Link to={"/Auth"} className="auth-btn">
                {" "}
                <span className="">Login/ Signup</span>
              </Link>
            )}
            <Dropdown >
              <MenuButton className='menubar'><MenuIcon /></MenuButton>
              <Menu>
                <MenuItem>
                  <Link style={{ color: '#444' }} className="nav-link scrollto" to={"/"}>
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{ color: '#444' }} className="nav-link scrollto" to={"/Departments"}>
                    Departments
                  </Link></MenuItem>
                <MenuItem>
                  <Link style={{ color: '#444' }} className="nav-link scrollto" to={"/Medicine"}>
                    Medicine
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{ color: '#444' }} className="nav-link scrollto" to={"/Doctors"}>
                    Doctors
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{ color: '#444' }} className="nav-link scrollto " to={"/about"}>
                    About
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{ color: '#444' }} className="nav-link scrollto" to={"/Contect1"}>
                    Contact
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{ color: '#444' }} className="nav-link scrollto" to={"/CallbackFun"}>
                    CallbackFun
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{ color: '#444' }} to={"/Appoinment "} className="nav-link scrollto" >
                    <span  className="">Make an </span>
                    Appointment
                  </Link>
                </MenuItem>

              </Menu>
            </Dropdown>
          </div>

        </header>
      </div>
    </div>
  );
}

export default Header;


import { Routes, Route } from 'react-router-dom';
import React from 'react';
// import Contect from './users/containers/Contect';
import Test2 from './users/containers/Test2';
import SideDrawermui from './users/containers/SideDrawermui';
import { createTheme, colors, ThemeProvider } from '@mui/material/styles';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import ProtectedRoute from './routes/ProtectedRoute';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';


// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: '#ff6337',
//     },
//   },
// });


function App() {

  const store = configureStore()
  return (


    <>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}>
    <Sidenavbar /> */}
      {/* <SideDrawermui /> */}
      {/* <Test2 /> */}
      {/* </ThemeProvider> */}
      <Routes>
        <Route path='/*' element={<UserRoutes />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/admin/*' element={<AdminRoutes />} />
        </Route>
      </Routes>
          
    </Provider>
    </>
  );
}

export default App;

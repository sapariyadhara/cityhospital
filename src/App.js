
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
// import Contect from './users/containers/Contect';
import Test2 from './users/containers/Test2';
import SideDrawermui from './users/containers/SideDrawermui';
import { createTheme, colors, ThemeProvider } from '@mui/material/styles';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import ProtectedRoute from './routes/ProtectedRoute';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
// import "./CounterContext";
import { CounterContext } from './users/containers/CounterContext/CounterContext';
import Dislpay from './users/containers/CounterContext/Display';
import Buttons from './users/containers/CounterContext/Buttons';




function App() {
  // const { store, persistor } = configureStore()
  const [count, setCount] = useState(0);
  return (


    <>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
          {/* <ThemeProvider theme={theme}>
    <Sidenavbar /> */}
          {/* <SideDrawermui /> */}
          {/* <Test2 /> */}
          {/* </ThemeProvider> */}
          {/* <Routes>
            <Route path='/*' element={<UserRoutes />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/admin/*' element={<AdminRoutes />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider> */}
    <CounterContext.Provider value={{ count: count, setCount: setCount }}>
        <Dislpay />
        <Buttons />
    </CounterContext.Provider>
   

    
    </>
  );
}

export default App;

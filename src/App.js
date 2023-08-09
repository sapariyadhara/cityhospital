
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
// import Contect from './users/containers/Contect';
import Test2 from './users/containers/Test2';
import SideDrawermui from './users/containers/SideDrawermui';
import { createTheme, colors } from '@mui/material/styles';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import ProtectedRoute from './routes/ProtectedRoute';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './Context/ThemeContext';
// import rootSaga from './sagas';
import { persistor, store } from './redux/store';
import { SnackbarProvider } from 'notistack';





function App() {
  return (
    <>
      <SnackbarProvider>
        <Provider store={store}>
          <ThemeProvider>
            <PersistGate loading={null} persistor={persistor}>
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
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;

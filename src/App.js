
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
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  const {store, persistor} = configureStore()
  return (


    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;

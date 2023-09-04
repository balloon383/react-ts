import React, { ReactNode } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import PrivateRoute from './hoc/PrivateRoute';


function App() {
  
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/main" element={
          <PrivateRoute>
              <Main />
          </PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;

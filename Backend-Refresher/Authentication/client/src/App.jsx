import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/signup' replace />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/signup' replace />} />
    </Routes>
  );
};

export default App;

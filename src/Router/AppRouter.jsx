import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProd from '../Pages/AddProd/AddProd'
import Cart from '../Pages/Cart/Cart'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/Login/Login'
import UserPage from "../Pages/UserPage/UserPage";
import ProdIdPage from '../Pages/ProdIdPage/ProdIdPage'


export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/webshop" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addprod" element={<AddProd />} />
        <Route path="/prod/:id" element={<ProdIdPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

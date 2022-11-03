import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/Login/Login'
import ProdIdPage from '../Pages/ProdIdPage/ProdIdPage'

export default function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path="/webshop" element = {<HomePage/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/cart" element = {<Cart/>}/>
            <Route path="/prod/:id" element = {<ProdIdPage/>}/>
            <Route path="*" element = {<HomePage/>}/>
        </Routes>

    </div>
  )
}

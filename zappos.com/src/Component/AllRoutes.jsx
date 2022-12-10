import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import Products from '../Pages/AllProducts'
import SinglePageProduct from '../Pages/SinglePageProduct'
import Register from '../Pages/Register'

const AllRoutes = () => {
  return (
    <div>
        {
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:id' element={<SinglePageProduct/>}></Route>
            {/* <Route path='/auth/google' element={</>} ></Route> */}
        </Routes>
        }
    </div>
  )
}

export default AllRoutes
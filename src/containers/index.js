import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import ProductList from './ProductList';
// import ProductDetalis from './ProductDetalis';
// import ComponetFinal from './ComponetFinal';
// import Error from './Error';
import Home from './curd/Home';
import AddFrom from './curd/AddFrom';
import UpdateFrom from './curd/UpdateFrom';
const Markup = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<Header />} /> */}
            {/* <Route path='/' element={<ProductList />} />
                <Route path='/list/:productId' element={<ProductDetalis />} />
                <Route path='/context' element={<ComponetFinal/>} />
                <Route element={<Error/>} /> */}


            <Route path='/' element={<Home />} />
            <Route path='/create' element={<AddFrom/>} />
            <Route path='/edit/:id' element={<UpdateFrom/>} />


        </Routes>
    )
}

export default Markup

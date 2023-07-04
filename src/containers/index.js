import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Header from './Header';
import ProductList from './ProductList';
import ProductDetalis from './ProductDetalis';
const Markup = () => {
    return (
            <Routes>
                {/* <Route path='/' element={<Header />} /> */}
                <Route path='/' element={<ProductList />} />
                <Route path='/list/:productId' element={<ProductDetalis />} />
                <Route> 404 page not  found</Route>
            </Routes>
    )
}

export default Markup

import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponet from './ProductComponet';
// import axios from 'axios';
import { getAllProduct } from '../redux/actions/ProductAction';

const ProductList = () => {
    const product=useSelector((state)=>state);
    console.log(product);
    const dispatch=useDispatch();

    // const GetProduct=()=>{
    //   const myurl=`https://fakestoreapi.com/products`;
    //   axios({
    //     method:"get",
    //     url:myurl,
    //     headers:{
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     }
    //   })
    //   .then((response)=>{
    //     console.log("get",response.data);
    //     dispatch(setProduct(response.data));
    //   })
    //   .catch((error)=>{
    //     console.log("get",error);
    //   })
    // }

    useEffect(()=>{
    // GetProduct();
    dispatch(getAllProduct());
    },[])
  return (
    <>
        <Header/>
      <div className='ui grid container'>
        <ProductComponet/>
    </div>
    
    </>
    
  )
}

export default ProductList

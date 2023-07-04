import React, { useEffect } from 'react'
import Header from './Header'
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectProuct, selectProdduct } from '../redux/actions/ProductAction';


const ProductDetalis = () => {
  const product = useSelector((state) => state.product)
  const {image,price,category,description,title}=product;
  const  {productId }= useParams();
  // console.log(productId);
  const dispatch = useDispatch();
  // console.log("select prd", product);
  
  // const GetSelectedProduct = () => {
  //   const myurl = `https://fakestoreapi.com/products/${productId}`;
  //   axios({
  //     method: "get",
  //     url: myurl,
  //   })
  //     .then((response) => {
  //       dispatch(selectProuct(response.data));
  //     })
  //     .catch((error) => {
  //       console.log("select e", error);
  //     })
  // }

  useEffect(() => {
   if(productId  &&  productId !== "") dispatch(selectProdduct(productId));
   return ()=>{
    dispatch(removeSelectProuct());
   }
  },[productId])


  return (
    <div>
      <Header />
      <div className='ui grid container' >
        {
          Object.keys(product).length === 0 ?
          (
            <div>...Loding</div>
          )
          :
          (
            <div className='ui placeholder segmnet' style={{padding:"30px"}}>
              <div className='ui two column stackable center aligned grid'>
                <div className='ui vertical divider'>
                  AND
                </div>
                {/* <div> */}
                <div className='middle aligned row'>
                    <div className='column lp'>
                      <img className='ui fluid image' src={image} alt={title} style={{objectFit:"contain",width:"500px",height
                    :"200px"}}/>
                      </div>
                      <div className='cloumn rp'>
                          <h1>{title}</h1>
                          <h2>
                            <a className='ui teal tag lable'>$ {price}</a>
                          </h2>
                          <h3 className='ui brown block header'>
                                {category}
                          </h3>
                          <p>{description}</p>
                          <div className='ui vertical animated button' tabIndex={0}>
                            <div className='hidden content'>
                              <i className='shop icon'></i>
                              </div>
                              <div className='visible content'>
                                Add to Cart
                                </div>

                            </div>
                      </div>
                  </div>
                </div>

            </div>

          )
        }


      </div>
    </div>
  )
}

export default ProductDetalis

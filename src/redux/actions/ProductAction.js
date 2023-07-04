
// import axios from 'axios'
import { Actiontypes } from '../constants/ActionTypes'
import FackStoreApis from '../../apis/FackStoreApis';


export const getAllProduct = () =>
  async (dispatch) => {
    const response = await FackStoreApis.get("/products");
    console.log(response);
    dispatch({
      type: Actiontypes.FETCH_PRODUCTS,
      payload: response.data
    })
  }

  export const selectProdduct = (id) =>
  async (dispatch) => {
    const response = await FackStoreApis.get(`/products/${id}`);
    console.log("select",response);
    dispatch({
      type: Actiontypes.SELECT_PRODUCT,
      payload: response.data
    })
  }
// const response=await axios.get("/product");
// console.log("get all ",response);
// return {
//   type:Actiontypes.FETCH_PRODUCTS,
//   payload:response,
// }



export const setProduct = (products) => {
  return {
    type: Actiontypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectProuct = (product) => {
  return {
    type: Actiontypes.SELECT_PRODUCT,
    payload: product,
  }
}

export const removeSelectProuct = () => {
  return {
    type: Actiontypes.REMOVE_SELECT_PRODUCT,
  }
}


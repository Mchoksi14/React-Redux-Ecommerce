import { Actiontypes } from "../constants/ActionTypes";

const initialstate={
    products:[],
}

export const productReducer=(state=initialstate,{type,payload})=>{
  switch (type) {
    case Actiontypes.SET_PRODUCTS:
         return {...state,products:payload}
    case Actiontypes.FETCH_PRODUCTS:
         return {...state,products:payload}
    default:
        return state
  }

}

export const selectProdduct=(state={},{type,payload})=>{
  switch (type) {
    case Actiontypes.SELECT_PRODUCT:
      return {...state,...payload}
    case Actiontypes.REMOVE_SELECT_PRODUCT:
      return {}
    default:
      return state
  }
}


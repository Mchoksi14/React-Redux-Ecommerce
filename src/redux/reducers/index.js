
import { combineReducers } from "redux";

import { productReducer, selectProdduct } from "./ProductReducer";

const reducer=combineReducers({
    allprouct:productReducer,
    product:selectProdduct,
})

export default reducer;
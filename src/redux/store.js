import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { productReducer } from "./Products/productReducer";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/authReducer";
import { cartReducer } from "./Cart/cartReducer"; 
import { orderReducer } from "./Orders/orderReducer";


let rootReducer=combineReducers({
    cartManager : cartReducer,
    productManager:productReducer,
    authManager:authReducer,
    orderManager:orderReducer
})


let composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export let store=legacy_createStore(
    rootReducer,
    composer(applyMiddleware(thunk))
)

import { configureStore ,applyMiddleware,compose} from '@reduxjs/toolkit';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
// import thunk from 'redux-thunk'//usefrom midelware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=configureStore({reducer},composeEnhancers(applyMiddleware(thunk)));

export default store;
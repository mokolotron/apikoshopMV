import {createStore,  applyMiddleware} from 'redux'

import thunk from "redux-thunk";
//import thunk from 'thunk';
import rootReducer from '../modules/index';
 const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
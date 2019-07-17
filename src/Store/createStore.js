import {createStore,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReucer from '../modules';
 const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
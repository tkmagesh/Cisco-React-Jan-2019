import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
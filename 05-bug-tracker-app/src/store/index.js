import rootReducer from '../reducers';
import { createStore } from 'redux';

let appStore = createStore(rootReducer);

export default appStore;
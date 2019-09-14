import { createStore } from 'redux';
import CountReducer from './reducer';

const store = createStore(CountReducer);

export default store;

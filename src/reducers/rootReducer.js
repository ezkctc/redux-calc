import { combineReducers } from 'redux';


import calcReducer from './calcReducer';


const rootReducer = combineReducers({
  
  calc_data: calcReducer,


});

export default rootReducer;


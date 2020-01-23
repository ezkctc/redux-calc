import { ADD,SUBTRACT,MULTIPLY,DIVIDE } from '../actions/types';

const calc_data = {
  sum:0,
  difference:0,
  product:0,
  quotient:0,

};

export default (state = calc_data, action) => {

  switch (action.type) {   
    case ADD:         
      return {      
        ... state,    
        sum: action.sum
      };
      
    case SUBTRACT:         
      return {      
        ... state,    
        difference: action.difference
      };
    
    case MULTIPLY:         
      return {      
        ... state,    
        product: action.product
      };
    
    case DIVIDE:         
      return {      
        ... state,    
        quotient: action.quotient
      };
    
    default:
      return state;
  }
};

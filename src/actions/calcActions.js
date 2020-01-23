import { ADD,SUBTRACT,MULTIPLY,DIVIDE } from './types';

export const addStuff = (a, b) => {
    return dispatch => {
        var newSum = parseFloat(a)+parseFloat(b)
      dispatch({
        type: ADD,
        sum:newSum
      })
    }
  }

  export const subtractStuff = (a, b) => {
    return dispatch => {
        var newDifference = parseFloat(a)-parseFloat(b)
      dispatch({
        type: SUBTRACT,
        difference:newDifference
      })
    }
  }


  export const multiplyStuff = (a, b) => {
    return dispatch => {
        var newProduct = parseFloat(a)*parseFloat(b)
      dispatch({
        type: MULTIPLY,
        product:newProduct
      })
    }
  }


  export const divideStuff = (a, b) => {
    return dispatch => {
        var newQuotient = parseFloat(a)/parseFloat(b)
      dispatch({
        type: DIVIDE,
        quotient:newQuotient
      })
    }
  }


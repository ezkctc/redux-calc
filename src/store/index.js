import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const logger = createLogger({
//     timestamps: true,
//     duration: true,
// })

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store

import { applyMiddleware, createStore } from 'redux'

//middleware
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

//reducers
import reducers from './reducers'

const middleware = applyMiddleware(logger(), thunk, promise())

export default createStore(reducers, middleware)

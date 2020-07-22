import { createStore } from 'redux'
// import thunk from 'redux-thunk'
// import middleware from './middleware'
// import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

export default store

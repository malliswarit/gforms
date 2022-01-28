
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
    )

export default store;
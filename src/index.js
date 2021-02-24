import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './containers/app'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

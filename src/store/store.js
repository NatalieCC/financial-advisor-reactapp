import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import cachePortfolioReducer from '../reducers/cache_portfolio_reducer';
import changeDonutchartReducer from '../reducers/change_donutchart_reducer';
import { combineReducers } from 'redux';
import { logger } from 'redux-logger';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    changeDonutchartReducer,
    cachePortfolioReducer,
})

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...[thunk, logger])),
)

export default store;


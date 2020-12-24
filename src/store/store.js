import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import changeDonutchartReducer from '../reducers/change_donutchart_reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    changeDonutchartReducer,
    composeEnhancer(applyMiddleware(thunk)),
)

export default store;


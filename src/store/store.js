import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from '../reducers/root_reducer';
import changeDonutchartReducer from '../reducers/change_donutchart_reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    //rootReducer,
    changeDonutchartReducer,
    composeEnhancer(applyMiddleware(thunk)),
)

export default store;

//const middlewares = [thunk];
//if (process.env.NODE_ENV !== "production") {
// must use 'require' (import only allowed at top of file)
//const { logger } = require("redux-logger");
//middlewares.push(logger);
//}

// const configureStore = (preloadedState = {}) => (
//     createStore(
//         rootReducer,
//         changeDonutchartReducer,
//         preloadedState,
//         applyMiddleware(thunk)
//     )
// );

// export default configureStore;
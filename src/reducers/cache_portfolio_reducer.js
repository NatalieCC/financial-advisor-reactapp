//import actions TYPE
import { RECEIVE_PORTFOLIO } from '../actions/cache_portfolio_actions';


const cachePortfolioReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PORTFOLIO:
            let { portfolio } = action;  //line 8 in action
            return Object.assign({}, state, { portfolio });  //returning a copy of the old state merged with the currentchart from the action.
        default:
            return state;
    }
}

export default cachePortfolioReducer;
//import actions
import { CHART_CHANGE } from '../actions/donut_chart_actions';
import { chartsData } from '../data'

let initialState = {
    currentChart: 1,
    chartsData
}

const changeDonutchartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHART_CHANGE:
            let { currentChart } = action;
            return Object.assign({}, state, { currentChart });
        default:
            return state;
    }
}

export default changeDonutchartReducer;
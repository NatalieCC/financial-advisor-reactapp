import Charts from './charts.js';
import { connect } from 'react-redux';
import { chartChange } from '../actions/donut_chart_actions';
//import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    //debugger
    return {
        currentChart: state.changeDonutchartReducer.currentChart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeChart: (newCurrentChart) => dispatch(chartChange(newCurrentChart))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts)
import Charts from './charts.js';
import { connect } from 'react-redux';
import { chartChange } from '../../src/actions/donut_chart_actions';
//import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        currentChart: state.currentChart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeChart: (newCurrentChart) => dispatch(chartChange(newCurrentChart))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts)
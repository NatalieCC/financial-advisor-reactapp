import { connect } from 'react-redux';
import PersonalizedPortfolio from './personalized_portfolio';
import { cachePortfolio } from '../actions/cache_portfolio_actions';

const mapStateToProps = (state, ownProps) => {
    //debugger
    return {
        //link to the redux store; would save it in props. 
        cachedPortfolio: state.cachePortfolioReducer.portfolio,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        cachePortfolio: (portfolio) => dispatch(cachePortfolio(portfolio))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalizedPortfolio)
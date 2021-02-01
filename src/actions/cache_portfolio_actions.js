//action type:
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';

//action creator:
export function cachePortfolio(portfolio) {
    return {
        type: RECEIVE_PORTFOLIO,
        portfolio: portfolio
    }
}

//action type:
export const CHART_CHANGE = 'CHART_CHANGE';

//action creator:
export function chartChange(newChart) {
    return {
        type: CHART_CHANGE,
        currentChart: newChart
    }
}



// define categories for the charts
export const categories = ['Bonds % ', 'Large Cap % ', 'Mid Cap', 'Foreign % ', 'Small Cap % '];
// define background colors for each category
export const colors = ['#E6E6FA', '#D8BFD8', '#DDA0DD', '#BA55D3', '#D14747'];  //'#EE82EE',
// define quantity of charts
export const maxCharts = 10;

// initialize allCharts data
let allCharts = [];

// retrieve charts from json data
let jsonData = require('../src/charts.json');

for (let i = 0, l = jsonData.charts.length; i < l; i++) {
    let chart = jsonData.charts[i];
    allCharts.push(chart);
}

// export charts data
export const chartsData = [...allCharts];



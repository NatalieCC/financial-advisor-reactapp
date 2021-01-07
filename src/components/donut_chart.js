import React from 'react';
import { chartsData, categories, colors } from '../data';
import Chart from 'chart.js';
import '../stylesheets/donut.css';

class DonutChart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let ctx = document.getElementById("myChart");
        let data = {
            labels: categories,
            datasets: [
                {
                    data: chartsData[this.props.currentChart], //index into json using keys passed in
                    backgroundColor: colors
                }]
        };

        this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                cutoutPercentage: 50 //The percentage of the chart that is cut out of the middle.
            }
        });
    }

    componentWillReceiveProps(props) {
        // set the data of the cart to the current chart selected
        this.chart.data.datasets[0].data = chartsData[props.currentChart];  //data from data.js, see import
        // trigger update method to refresh the chart
        this.chart.update();  //library function
    }

    render() {
        return (
            <div>
                <canvas id="myChart"></canvas>
            </div>
        );
    }
}

export default DonutChart;
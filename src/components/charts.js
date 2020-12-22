import React from 'react';
import DonutChart from './donut_chart';
import { maxCharts } from '../../src/data';
import { Button, ButtonGroup, Callout, Colors } from 'react-foundation';

const Charts = ({ currentChart, onChangeChart }) => {
    // class Charts extends React.Component {
    //     constructor(props) {
    //         super(props);
    //     }

    // toNextPage(e){
    //     this.props.history.push({
    //         pathname: `/calculator`,
    //         state: {
    //             'riskLevel': ,
    //             'Bonds': ,
    //             'Large Cap': ,
    //             'Mid Cap': ,
    //             'Foreign': ,
    //             'Small Cap' :
    //         }
    //     })
    // }

    //render() {
    return (
        <div>
            <div id='risk-selector-container'>
                <div id='buttons-container'>
                    <ButtonGroup onClick={(e) => {
                        return (
                            onChangeChart(e.target.innerText)
                        )
                    }}>
                        <div id='risk-selector'>
                            <ul class='risk-selector-ul'>
                                <Button>1</Button>
                                <Button>2</Button>
                                <Button>3</Button>
                                <Button>4</Button>
                                <Button>5</Button>
                                <Button>6</Button>
                                <Button>7</Button>
                                <Button>8</Button>
                                <Button>9</Button>
                                <Button >10</Button>
                            </ul>
                        </div>
                    </ButtonGroup>
                    <Button id='continue' class='buttonC'>Continue</Button>
                    <Button id='back'>Back to Table</Button>
                </div>
            </div>
            <div id='donutChart'>
                <DonutChart currentChart={currentChart - 1} />
            </div>
        </div>
    );
}

export default Charts;

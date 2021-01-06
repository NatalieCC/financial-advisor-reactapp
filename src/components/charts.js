import React from 'react';
import DonutChart from './donut_chart';
import { Button, ButtonGroup, Callout, Colors } from 'react-foundation';
import { withRouter } from 'react-router-dom';
import TableChart from './table_chart'

class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            displayDonut: true,
            buttonClicked: '',
            chart: {
                1: { 'Bonds %': 80, 'Large Cap %': 20, 'Mid Cap %': 0, 'Foreign %': 0, 'Small Cap %': 0 },
                2: { 'Bonds %': 70, 'Large Cap %': 15, 'Mid Cap %': 15, 'Foreign %': 0, 'Small Cap %': 0 },
                3: { 'Bonds %': 60, 'Large Cap %': 15, 'Mid Cap %': 15, 'Foreign %': 10, 'Small Cap %': 0 },
                4: { 'Bonds %': 50, 'Large Cap %': 20, 'Mid Cap %': 20, 'Foreign %': 10, 'Small Cap %': 0 },
                5: { 'Bonds %': 40, 'Large Cap %': 20, 'Mid Cap %': 20, 'Foreign %': 20, 'Small Cap %': 0 },
                6: { 'Bonds %': 35, 'Large Cap %': 25, 'Mid Cap %': 5, 'Foreign %': 30, 'Small Cap %': 5 },
                7: { 'Bonds %': 20, 'Large Cap %': 25, 'Mid Cap %': 25, 'Foreign %': 25, 'Small Cap %': 5 },
                8: { 'Bonds %': 10, 'Large Cap %': 20, 'Mid Cap %': 40, 'Foreign %': 20, 'Small Cap %': 10 },
                9: { 'Bonds %': 5, 'Large Cap %': 15, 'Mid Cap %': 40, 'Foreign %': 25, 'Small Cap %': 15 },
                10: { 'Bonds %': 0, 'Large Cap %': 5, 'Mid Cap %': 25, 'Foreign %': 30, 'Small Cap %': 40 },
            },
        }
        this.sendInfo = this.sendInfo.bind(this);
    }

    goBack() {
        this.setState({ displayDonut: false })
    }

    sendInfo() {
        this.props.history.push({
            pathname: `/calculator`,
            state: {
                bonds: this.state.chart[this.state.buttonClicked]["Bonds %"],
                large: this.state.chart[this.state.buttonClicked]["Large Cap %"],
                mid: this.state.chart[this.state.buttonClicked]["Mid Cap %"],
                foreign: this.state.chart[this.state.buttonClicked]["Foreign %"],
                small: this.state.chart[this.state.buttonClicked]["Small Cap %"],
            }
        })
    }

    render() {
        if (!this.state.displayDonut) {
            return (
                <TableChart />
            )
        } else {
            //debugger
            return (
                <div>
                    <Callout color={Colors.ALERT}>
                        <h1 id='app-title'>Financial Advisor</h1>
                    </Callout>
                    <div class='risk-selector-container'>
                        <div class='donut-buttons-container'>
                            <ButtonGroup onClick={(e) => {
                                this.setState({ buttonClicked: e.target.innerText })
                                return (
                                    this.props.onChangeChart(e.target.innerText)
                                )
                            }} id='donut-button-group'>
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
                            <div class='bt-wrapper'>
                                <Button id='donut-continue' onClick={this.sendInfo} >Continue</Button>
                                <Button id='back' onClick={this.goBack}>Back to Table</Button>
                            </div>
                        </div>
                    </div>
                    <div id='donutChart'>
                        <DonutChart
                            currentChart={this.props.currentChart - 1}
                        />
                    </div>
                </div >
            );
        }
    }
}
export default withRouter(Charts);

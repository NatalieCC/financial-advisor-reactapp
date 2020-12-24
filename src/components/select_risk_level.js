import React from 'react';
import { Button, ButtonGroup, Callout, Colors } from 'react-foundation';
import '../../src/selectrisk.css';
import { Link, withRouter } from 'react-router-dom';
import ChartsContainer from '../components/charts_container';

class SelectRiskLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDonut: false,
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
        this.turnOnHighlight = this.turnOnHighlight.bind(this);
        this.getButtonInfo = this.getButtonInfo.bind(this);
        this.showDonutChart = this.showDonutChart.bind(this);
    }

    showDonutChart() {
        this.setState({ displayDonut: true })
    }

    displayChart() {
        const theChart = Object.values(this.state.chart).map((obj, index) => {
            //debugger
            let val = index + 1;
            return (
                <tr id={`myDiv${val}`} style={{ textAlign: 'center' }}>
                    <td>{index + 1}</td>
                    <td>{obj["Bonds %"]}</td>
                    <td>{obj["Large Cap %"]}</td>
                    <td>{obj["Mid Cap %"]}</td>
                    <td>{obj["Foreign %"]}</td>
                    <td>{obj["Small Cap %"]}</td>
                </tr >
            )
        });
        return <tbody>{theChart}</tbody>
    }

    getButtonInfo(e) {
        this.turnOnHighlight(parseInt(e.target.innerText));
    }

    turnOnHighlight(bt) {
        if (this.state.buttonClicked == "") {
            let row = document.getElementById(`myDiv${bt}`)
            row.classList.add('bk');
            this.setState({ buttonClicked: bt })
        } else {
            let oldRow = document.getElementById(`myDiv${this.state.buttonClicked}`)
            oldRow.classList.remove('bk')
            let row = document.getElementById(`myDiv${bt}`)
            row.classList.add('bk');
            this.setState({ buttonClicked: bt })
        }
    }

    render() {
        if (this.state.displayDonut) {
            return (
                <ChartsContainer />
            )
        } else {
            return (
                <div>
                    <Callout color={Colors.ALERT}>
                        <h1 id='app-title'>Financial Advisor</h1>
                    </Callout>
                    <div id='risk-selector-container'>
                        <div class='risk-selector-header-labels'>
                            <h5 class='risk-label-select'>Please Select A Risk Level For Your Investment Portfolio</h5>
                            <div class='risk-label-levels'>
                                <div class="risk-label">Low</div>
                                <div class="risk-label">High</div>
                            </div>
                        </div>
                        <div id='buttons-container'>
                            <ButtonGroup onClick={this.getButtonInfo} >
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
                                        <Button>10</Button>
                                    </ul>
                                </div>
                            </ButtonGroup>
                            <Button id='continue'>Continue</Button>
                            <Button onClick={this.showDonutChart} color={Colors.ALERT} id='toDonutBt'>View in Donut Chart</Button>
                        </div>
                        <table>
                            <tr>
                                <th width="80">Risk</th>
                                <th width="80">Bonds %</th>
                                <th width="80">Large Cap %</th>
                                <th width="80">Mid Cap %</th>
                                <th width="80">Foreign %</th>
                                <th width="80">Small Cap %</th>
                            </tr>
                            {this.displayChart()}
                        </table>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(SelectRiskLevel);
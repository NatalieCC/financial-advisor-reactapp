import React from 'react';
import DonutChart from './donut_chart';
import { Button, ButtonGroup } from 'react-foundation';
import { Link, withRouter } from 'react-router-dom';
import SelectRiskLevel from './select_risk_level'

class Charts extends React.Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            displayDonut: true
        }
    }

    goBack() {
        this.setState({ displayDonut: false })
    }

    render() {
        if (!this.state.displayDonut) {
            debugger
            return (
                <SelectRiskLevel />
            )
        } else {
            return (
                <div>
                    <div id='risk-selector-container'>
                        <div id='buttons-container'>
                            <ButtonGroup onClick={(e) => {
                                return (
                                    this.props.onChangeChart(e.target.innerText)
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
                            <Button id='continue' >Continue</Button>
                            <Button id='back' onClick={this.goBack}>Back to Table</Button>
                        </div>
                    </div>
                    <div id='donutChart'>
                        <DonutChart currentChart={this.props.currentChart - 1} />
                    </div>
                </div >
            );
        }
    }
}
export default withRouter(Charts);

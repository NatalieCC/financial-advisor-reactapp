import React, { useState } from 'react';
import { Button, ButtonGroup, Callout, Colors } from 'react-foundation';
import { withRouter } from 'react-router-dom';

class PersonalizedPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bondsInput: '',
            largecapInput: '',
            midcapInput: '',
            foreignInput: '',
            smallcapInput: '',
            bondsChosen: this.props.history.location.state.bonds,
            largecapChosen: this.props.history.location.state.large,
            midcapChosen: this.props.history.location.state.mid,
            foreignChosen: this.props.history.location.state.foreign,
            smallcapChosen: this.props.history.location.state.small,
            newamountObj: { newBonds: '', newLargecap: '', newMidcap: '', newForeign: '', newSmallcap: '' },
        }
        this.calculate = this.calculate.bind(this);
        this.update = this.update.bind(this);
    }
    displayRiskInfo() {
        return (
            <tr style={{ textAlign: 'center' }}>
                <td>{this.state.bondsChosen}</td>
                <td>{this.state.largecapChosen}</td>
                <td>{this.state.midcapChosen}</td>
                <td>{this.state.foreignChosen}</td>
                <td>{this.state.smallcapChosen}</td>
            </tr>
        )
    }

    calculate() {
        let sum = parseFloat(this.state.bondsInput) + parseFloat(this.state.largecapInput) + parseFloat(this.state.midcapInput) + parseFloat(this.state.foreignInput) + parseFloat(this.state.smallcapInput)
        let newBonds = parseFloat((sum * this.state.bondsChosen * 0.01).toFixed(2));
        let newLargecap = parseFloat((sum * this.state.largecapChosen * 0.01).toFixed(2));
        let newMidcap = parseFloat((sum * this.state.midcapChosen * 0.01).toFixed(2));
        let newForeign = parseFloat((sum * this.state.foreignChosen * 0.01).toFixed(2));
        let newSmallcap = parseFloat((sum * this.state.smallcapChosen * 0.01).toFixed(2));

        let diff = {
            bondsDiff: parseFloat((newBonds - parseFloat(this.state.bondsInput)).toFixed(2)),
            largecapDiff: parseFloat((newLargecap - parseFloat(this.state.largecapInput)).toFixed(2)),
            midcapDiff: parseFloat((newMidcap - parseFloat(this.state.midcapInput)).toFixed(2)),
            foreignDiff: parseFloat((newForeign - parseFloat(this.state.foreignInput)).toFixed(2)),
            smallcapDiff: parseFloat((newSmallcap - parseFloat(this.state.smallcapInput)).toFixed(2)),
        };
        this.setState({
            differenceObj: diff,
            newamountObj: {
                newBonds: newBonds,
                newLargecap: newLargecap,
                newMidcap: newMidcap,
                newForeign: newForeign,
                newSmallcap: newSmallcap
            }
        })
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    render() {
        return (
            <div>
                <Callout color={Colors.ALERT}>
                    <h1 id='app-title'>Financial Advisor</h1>
                </Callout>
                <h4 class='risk-label-select'>Personalized Portfolio</h4>
                <table>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Bonds %</th>
                            <th style={{ textAlign: 'center' }}>Large Cap %</th>
                            <th style={{ textAlign: 'center' }}>Mid Cap %</th>
                            <th style={{ textAlign: 'center' }}>Foreign %</th>
                            <th style={{ textAlign: 'center' }}>Small Cap %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayRiskInfo()}
                    </tbody>
                </table>
                <h5 class='risk-label-select'>Please Enter Your Current Portfolio</h5>
                <Button onClick={this.calculate} id='reba-bt'>Rebalance</Button>
            </div>
        )
    }
}

export default withRouter(PersonalizedPortfolio);
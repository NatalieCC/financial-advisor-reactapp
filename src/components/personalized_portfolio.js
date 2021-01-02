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
            differenceObj: { bondsDiff: '', largecapDiff: '', midcapDiff: '', foreignDiff: '', smallcapDiff: '' },
            newamountObj: { newBonds: '', newLargecap: '', newMidcap: '', newForeign: '', newSmallcap: '' },
        }
        this.calculate = this.calculate.bind(this);
        this.update = this.update.bind(this);
    }
    displayRiskInfo() {
        //debugger
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
                <table>
                    <thead class="risk-calculator-input-labels">
                        <tr>
                            <th></th>
                            <th>Current Amount</th>
                            <th>Difference</th>
                            <th>New Amount</th>
                            {/* <th>Recommended Transfers</th> */}
                        </tr>
                    </thead>
                    <tbody class="risk-calculator-main">
                        <tr class="risk-calculator-main-row">
                            <td>Bonds $:</td>
                            <div class="risk-calculator-main-row-box">
                                <input class="risk-calculator-main-input"
                                    input="text"
                                    value={this.state.bondsInput}
                                    onChange={this.update('bondsInput')}
                                />
                            </div>
                            <th class="risk-calculator-main-difference">{this.state.differenceObj.bondsDiff}</th>
                            <th class="risk-calculator-main-new">{this.state.newamountObj.newBonds}</th>
                        </tr>
                        <tr class="risk-calculator-main-row">
                            <td>Large Cap $:</td>
                            <div class="risk-calculator-main-row-box">
                                <input class="risk-calculator-main-input"
                                    input="text"
                                    value={this.state.largecapInput}
                                    onChange={this.update('largecapInput')}
                                />
                            </div>
                            <th class="risk-calculator-main-difference">{this.state.differenceObj.largecapDiff}</th>
                            <th class="risk-calculator-main-new">{this.state.newamountObj.newLargecap}</th>
                        </tr>
                        <tr class="risk-calculator-main-row">
                            <td>Mid Cap $:</td>
                            <div class="risk-calculator-main-row-box">
                                <input class="risk-calculator-main-input"
                                    input="text"
                                    value={this.state.minInput}
                                    onChange={this.update('midcapInput')}
                                />
                            </div>
                            <th class="risk-calculator-main-difference">{this.state.differenceObj.midcapDiff}</th>
                            <th class="risk-calculator-main-new">{this.state.newamountObj.newMidcap}</th>
                        </tr>
                        <tr class="risk-calculator-main-row">
                            <td>Foreign $:</td>
                            <div class="risk-calculator-main-row-box">
                                <input class="risk-calculator-main-input"
                                    input="text"
                                    value={this.state.foreignInput}
                                    onChange={this.update('foreignInput')}
                                />
                            </div>
                            <th class="risk-calculator-main-difference">{this.state.differenceObj.foreignDiff}</th>
                            <th class="risk-calculator-main-new">{this.state.newamountObj.newForeign}</th>
                        </tr>
                        <tr class="risk-calculator-main-row">
                            <td>Small Cap $:</td>
                            <div class="risk-calculator-main-row-box">
                                <input class="risk-calculator-main-input"
                                    input="text"
                                    value={this.state.smallInput}
                                    onChange={this.update('smallcapInput')}
                                />
                            </div>
                            <th class="risk-calculator-main-difference">{this.state.differenceObj.smallcapDiff}</th>
                            <th class="risk-calculator-main-new">{this.state.newamountObj.newSmallcap}</th>
                        </tr>
                    </tbody>
                    <div></div>
                </table>
                <Button onClick={this.calculate} id='reba-bt'>Rebalance</Button>
            </div>
        )
    }
}

export default withRouter(PersonalizedPortfolio);
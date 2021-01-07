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
            differenceObj: { Bonds: '', Largecap: '', Midcap: '', ForeignDiff: '', Smallcap: '' },
            newamountObj: { newBonds: '', newLargecap: '', newMidcap: '', newForeign: '', newSmallcap: '' },
            displaymessage: [],
        }
        this.calculate = this.calculate.bind(this);
        this.update = this.update.bind(this);
        this.displayMessage = this.displayMessage.bind(this);
        this.getByValue = this.getByValue.bind(this);
        this.toPrint = this.toPrint.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
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
            Bonds: parseFloat((newBonds - parseFloat(this.state.bondsInput)).toFixed(2)),
            Largecap: parseFloat((newLargecap - parseFloat(this.state.largecapInput)).toFixed(2)),
            Midcap: parseFloat((newMidcap - parseFloat(this.state.midcapInput)).toFixed(2)),
            Foreign: parseFloat((newForeign - parseFloat(this.state.foreignInput)).toFixed(2)),
            Smallcap: parseFloat((newSmallcap - parseFloat(this.state.smallcapInput)).toFixed(2)),
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
        //debugger
        this.displayMessage(diff);
    }

    displayMessage(diff) {
        let message = [];
        let differenceObj = diff;
        let result = {};
        var keys = Object.keys(differenceObj);
        keys = keys.sort(function (a, b) { return differenceObj[a] - differenceObj[b] });
        keys.forEach(function (k) {
            result[k] = differenceObj[k];
        })
        let valueArr = Object.values(result);
        let i = 0;
        let j = valueArr.length - 1;
        while (i < j) {
            if (valueArr[i] === 0) {
                i++
            }
            if (valueArr[j] === 0) {
                j--;
            }
            if (i > j) break;
            let remain = Math.round((valueArr[i] + valueArr[j]) * 100) / 100;
            let amount, categoryOut, categoryIn;
            if (remain < 0) {
                amount = valueArr[j];
                categoryOut = this.getByValue(result, valueArr[i]);
                categoryIn = this.getByValue(result, valueArr[j]);
            } else if (remain > 0) {
                amount = valueArr[i];
                categoryOut = this.getByValue(result, valueArr[i]);
                categoryIn = this.getByValue(result, valueArr[j]);
            } else {
                amount = valueArr[i];
                categoryOut = this.getByValue(result, valueArr[i]);
                categoryIn = this.getByValue(result, valueArr[j]);
            }
            if (amount !== 0 && categoryOut.localeCompare(categoryIn) !== 0) message.push(`Transfer $${Math.abs(amount)} from ${categoryOut} to ${categoryIn}.`);
            message.push(<br />);
            message.push(<br />);
            this.toPrint(message)
            if (remain < 0) {
                valueArr[i] = remain;
                valueArr[j] = 0
                result[categoryOut] = remain;
                result[categoryIn] = 0;
            } else if (remain > 0) {
                valueArr[j] = remain;
                valueArr[i] = 0
                result[categoryIn] = remain;
                result[categoryOut] = 0;
            } else {
                valueArr[i] = 0;
                valueArr[j] = 0;
                result[categoryOut] = 0;
                result[categoryIn] = 0
            }
        }
    }

    getByValue(result, searchValue) {
        for (let [key, value] of Object.entries(result)) {
            if (value === searchValue)
                return key;
        }
    }

    toPrint(message) {
        this.setState({
            displaymessage: message,
        })
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    renderMessage() {
        // let newAmount = this.state.amount ? this.state.amount : '';
        // let newCategoryOut = this.state.categoryOut ? this.state.categoryOut : '';
        // let newCategoryIn = this.state.categoryIn ? this.state.categoryIn : '';
        let newMessage = this.state.displaymessage ? this.state.displaymessage : [];
        //if (newAmount) {
        return (
            <div>
                {/* {`Transfer ${newAmount} from ${newCategoryOut} to ${newCategoryIn}`} */}
                {newMessage}
            </div>
        )
        // } else {
        //     debugger
        //     return null;
        // }
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
                <div class='table-container'>
                    <table style={{ width: "70%" }}>
                        <thead class="risk-calculator-input-labels">
                            <tr>
                                <th></th>
                                <th>Current Amount</th>
                                <th>Difference</th>
                                <th>New Amount</th>
                            </tr>
                        </thead>
                        <tbody class="risk-calculator-main">
                            <tr class="risk-calculator-main-row">
                                <td>Bonds $:</td>
                                <div class="risk-calculator-main-row-box">
                                    <input class="risk-calculator-main-input"
                                        input="text"
                                        type="number"
                                        value={this.state.bondsInput}
                                        onChange={this.update('bondsInput')}
                                    />
                                </div>
                                <th class="risk-calculator-main-difference">{this.state.differenceObj.Bonds}</th>
                                <th class="risk-calculator-main-new">{this.state.newamountObj.newBonds}</th>
                            </tr>
                            <tr class="risk-calculator-main-row">
                                <td>Large Cap $:</td>
                                <div class="risk-calculator-main-row-box">
                                    <input class="risk-calculator-main-input"
                                        input="text"
                                        type="number"
                                        value={this.state.largecapInput}
                                        onChange={this.update('largecapInput')}
                                    />
                                </div>
                                <th class="risk-calculator-main-difference">{this.state.differenceObj.Largecap}</th>
                                <th class="risk-calculator-main-new">{this.state.newamountObj.newLargecap}</th>
                            </tr>
                            <tr class="risk-calculator-main-row">
                                <td>Mid Cap $:</td>
                                <div class="risk-calculator-main-row-box">
                                    <input class="risk-calculator-main-input"
                                        input="text"
                                        type="number"
                                        value={this.state.minInput}
                                        onChange={this.update('midcapInput')}
                                    />
                                </div>
                                <th class="risk-calculator-main-difference">{this.state.differenceObj.Midcap}</th>
                                <th class="risk-calculator-main-new">{this.state.newamountObj.newMidcap}</th>
                            </tr>
                            <tr class="risk-calculator-main-row">
                                <td>Foreign $:</td>
                                <div class="risk-calculator-main-row-box">
                                    <input class="risk-calculator-main-input"
                                        input="text"
                                        type="number"
                                        value={this.state.foreignInput}
                                        onChange={this.update('foreignInput')}
                                    />
                                </div>
                                <th class="risk-calculator-main-difference">{this.state.differenceObj.Foreign}</th>
                                <th class="risk-calculator-main-new">{this.state.newamountObj.newForeign}</th>
                            </tr>
                            <tr class="risk-calculator-main-row">
                                <td>Small Cap $:</td>
                                <div class="risk-calculator-main-row-box">
                                    <input class="risk-calculator-main-input"
                                        input="text"
                                        type="number"
                                        value={this.state.smallInput}
                                        onChange={this.update('smallcapInput')}
                                    />
                                </div>
                                <th class="risk-calculator-main-difference">{this.state.differenceObj.Smallcap}</th>
                                <th class="risk-calculator-main-new">{this.state.newamountObj.newSmallcap}</th>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ width: "30%" }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Recommended Transfers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <div class='message-content'>{this.renderMessage()}</div>
                        </tbody>
                    </table>
                </div>
                <Button onClick={this.calculate} id='reba-bt'>Rebalance</Button>
            </div>
        )
    }
}

export default withRouter(PersonalizedPortfolio);
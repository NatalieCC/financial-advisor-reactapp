import React from 'react';

class PersonalizedPortfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <P>Personalized Portfolio</P>
                <div class="row">
                    <div class="columns">
                        <table class="stack">
                            <thead>
                                <tr>
                                    <th width="80">Bonds %</th>
                                    <th width="80">Large Cap %</th>
                                    <th width="80">Mid Cap %</th>
                                    <th width="80">Foreign %</th>
                                    <th width="80">Small Cap %</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <p>Please Enter Your Current Portfolio</p>

                <table>
                    <tr>
                        <th width="80">Current Amount</th>
                        <th width="80">Difference</th>
                        <th width="80">New Amount</th>
                        <th width="80">Recommended Transfers</th>
                    </tr>
                    <tr>
                        <td>Bonds $:</td>
                    </tr>
                    <tr>
                        <td>Large Cap $:</td>
                    </tr>
                    <tr>
                        <td>Mid Cap $:</td>
                    </tr>
                    <tr>
                        <td>Foreign $:</td>
                    </tr>
                    <tr>
                        <td>Small Cap $:</td>
                    </tr>
                </table>

                <button>Rebalance</button>
            </div >
        )
    }
}

export default PersonalizedPortfolio;
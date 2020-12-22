import './App.css';
import SelectRiskLevel from './components/select_risk_level';
import ChartsContainer from './components/charts_container';
import React from 'react'
import { Button, ButtonGroup, Callout, Colors } from 'react-foundation';
import logo from './logo.svg';
import { Router, Redirect } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// const App = () => (
//   <div>
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" component={SelectRiskLevel} />
//         <Route path="/" component={ChartsContainer} />
//       </Switch>
//     </BrowserRouter>
//   </div>
// )
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDonut: false
    }
    this.showDonutChart = this.showDonutChart.bind(this)
  }

  showDonutChart() {
    this.setState({ displayDonut: true })
  }

  render() {
    if (this.state.displayDonut) {
      return (
        <div>
          <ChartsContainer />
        </div>
      )
    } else {
      return (
        <div>
          <SelectRiskLevel />
          <Button onClick={this.showDonutChart} color={Colors.ALERT} id='toDonutBt' >View in Donut Chart</Button>
        </div>
      )
    }
  }
}

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

//export default App;

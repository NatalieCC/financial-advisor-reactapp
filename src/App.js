import React from 'react'
import './App.css';
import SelectRiskLevel from './components/select_risk_level';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChartsContainer from './components/charts_container';
import { Button, ButtonGroup, Callout, Colors } from 'react-foundation';
import logo from './logo.svg';
import { Router, Redirect } from 'react-router';


const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SelectRiskLevel} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;

//export default class App extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     displayDonut: false
//   }
//   this.showDonutChart = this.showDonutChart.bind(this)
// }

// showDonutChart() {
//   this.setState({ displayDonut: true })
// }

//   render() {
//     if (this.state.displayDonut) {
//       return (
//         <Router>
//           <div>
//             <Route path="/" component={ChartsContainer} />
//           </div>
//         </Router>
//       )
//     } else {
//       return (
//         <Router>
//           <div>
//             <Route path="/" component={SelectRiskLevel} />
//             <Route />
//             <Button onClick={this.showDonutChart} color={Colors.ALERT} id='toDonutBt'>View in Donut Chart</Button>
//           </div>
//         </Router>
//       )
//     }
//   }
// }



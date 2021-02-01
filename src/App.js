import React from 'react'
import './App.css';
import TableChart from './components/table_chart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PersonalizedPortfolioContainer from './components/personalized_portfolio_container';
//import ChartsContainer from '../src/components/charts_container';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={composeComponents(TableChart)} />
        <Route path="/calculator" component={composeComponents(PersonalizedPortfolioContainer)} />
      </Switch>
    </BrowserRouter>
  </div>
)

const composeComponents = (...components) => {
  return () => (
    <div>
      {components.map((Component, index) => (
        <Component key={`comp-${index}`} />
      ))}
    </div>
  );
};

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



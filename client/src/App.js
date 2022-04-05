import './App.css';
import {Switch, Route} from 'react-router-dom'
// importo los componentes que vamos a renderizar
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';
import ActivityCreate from './components/ActivityCreate';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/home/:id' component={Detail}/>
        <Route exact path='/activity' component={ActivityCreate}/>
      </Switch>
      
    </div>
  );
}

export default App;

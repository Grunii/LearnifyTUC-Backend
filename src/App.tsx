import { Route, Switch } from 'react-router-dom';
import './Sass/main.scss';
import DetailPage from './Pages/DetailPage';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import Navigation from './Components/navigation';


function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/detail" component={DetailPage} />
      </Switch>
    </>
  );
}

export default App;
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Technologies from './components/Pages/Technologies/Technologies';
import Industries from './components/Pages/Industries/Industries';
import Messages from './components/Messages';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Layout />
        <div className="container">
          <main>
            <Switch>
              <Route path="/" activeClassName='is-active' component={Home} exact />
              <Route path="/technologies" component={Technologies} />
              <Route path="/industries" component={Industries} />
              <Route path="/messages" component={Messages} />
              <Route component={Error} />
            </Switch>
          </main>
        </div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavigationBar from './components/layout/NavigationBar';
import CustomAlert from './components/layout/CustomAlert';
import Home from './components/pages/Home';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <NavigationBar />
            <Container className='mt-4 mb-5'>
              <CustomAlert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

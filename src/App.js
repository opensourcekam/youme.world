/* global localStorage */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/index';
import Layout from './layout';
import theme from './theme.json';
import './css/font.css';
import './App.css';

/** ROUTES */
import { Home, Notfound, SignUp, SignIn, SignOut } from './routes';
import FirstTimeForm from './routes/Wanderer/FirstTimeUserForm';
import WandererDash from './routes/Wanderer/Dashboard';
import WandererInspiration from './routes/Wanderer/Inspiration';
import NewTripForm from './routes/Wanderer/Trip/Form';
import TripDash from './routes/Wanderer/Trip/Dash';

/** REDUX */
import configureStore, { history } from './redux/configureStore';
import { AUTH_USER } from './redux/types';
import checkAuth from './hocs/RequireAuth';

export const store = configureStore();

if (localStorage.getItem('token')) {
  store.dispatch({
    type: AUTH_USER,
    payload: localStorage.getItem('WandererId'),
  });
}


const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signout" component={SignOut} />

              <Route exact path="/wanderer/welcome" component={checkAuth(FirstTimeForm)} />
              <Route exact path="/wanderer/dash" component={checkAuth(WandererDash)} />
              <Route exact path="/wanderer/new/trip" component={checkAuth(NewTripForm)} />
              <Route exact path="/wanderer/inspiration" component={checkAuth(WandererInspiration)} />
              <Route exact path="/wanderer/trip/:tripId" component={checkAuth(TripDash)} />


              <Route exact component={Notfound} />
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>
  </ThemeProvider>
);

export default App;

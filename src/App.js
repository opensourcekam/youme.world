/* global localStorage */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Layout from './layout';
import theme from './theme.json';
import './css/font.css';
import './App.css';

/** ROUTES */
import { Home, Notfound, SignUp, SignIn, SignOut } from './routes';
import { RequireAuth } from './hocs';
import FirstTimeForm from './routes/Wanderer/FirstTimeUserForm';
import WandererDash from './routes/Wanderer/Dashboard';
import WandererInspiration from './routes/Wanderer/Inspiration';
import NewTripForm from './routes/Wanderer/Trip/Form';
import TripDash from './routes/Wanderer/Trip/Dash';

/** REDUX */
import configureStore, { history } from './redux/configureStore';
import { AUTH_USER } from './redux/types';

export const store = configureStore();
if (localStorage.getItem('token')) store.dispatch({ type: AUTH_USER });

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signout" component={SignOut} />
						<Route exact path="/wanderer/welcome" component={FirstTimeForm} />

						<Route exact path="/wanderer/dash" component={WandererDash} />
						<Route exact path="/wanderer/new/trip" component={NewTripForm} />
						<Route exact path="/wanderer/inspiration" component={WandererInspiration} />
						<Route exact path="/trip/dash" component={TripDash} />
						{/* <Route exact path="/trip/shopping" component={TripShopping} /> */}

            <Route exact component={Notfound} />
          </Switch>
        </Layout>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
);

export default App;

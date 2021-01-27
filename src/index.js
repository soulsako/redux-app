import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import Button from '@material-ui/core/Button';
import { SnackbarProvider } from 'notistack';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/configureStore';
import { Theme } from './MaterialUI';
import { ErrorBoundary } from './components';
import ErrorView from './components/ErrorBoundary/ErrorView';

ReactDOM.render(
  <Provider store={store()}>
    <Router>
      <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <ErrorBoundary nodeErrorView={ErrorView} onError={}>
          <SnackbarProvider
            maxSnack={3} 
            action={[<Button size="small">Dismiss</Button>]}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <App />
          </SnackbarProvider>
        </ErrorBoundary>
      </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </Router>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

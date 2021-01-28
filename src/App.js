import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import Button from '@material-ui/core/Button';
import { SnackbarProvider } from 'notistack';
import { Theme } from './MaterialUI';
import { ErrorBoundary } from './components';
import ErrorView from './components/ErrorBoundary/ErrorView';
import './App.css';

function App() {

  /**
  *
  * @see https://reactjs.org/docs/error-boundaries.html#component-stack-traces
  * @param {Error} error - The error caught by the error boundary.
  * @param {Object} objInfo - Additional stack trace indicating components
  * involved in the crash.
  * @returns {undefined}
  */
 const handleCrash = (error, objInfo) => {
   // Handle crash here.
 };

  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <ErrorBoundary nodeErrorView={ErrorView} onError={handleCrash}>
          <SnackbarProvider
            maxSnack={3} 
            action={[<Button size="small">Dismiss</Button>]}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
           Hello world!
          </SnackbarProvider>
        </ErrorBoundary>
      </MuiPickersUtilsProvider>
      </MuiThemeProvider>
  );
}

export default App;

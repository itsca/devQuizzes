import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Layout from './Layout/Layout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6E81FF',
      contrastText: '#FFF'

    },
    secondary: {
      main: '#61C9FF',
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout/>
      </ThemeProvider>
    </div>
  );
}

export default App;

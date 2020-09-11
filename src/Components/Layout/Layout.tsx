import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Main from '../Main/Main'
import MainBar from '../MainBar/MainBar';
import Quiz from '../Quiz/Quiz';
import Landing from '../Landing/Landing';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f1f1f1',
  }
});

const Layout: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root + ' mainContainer'}>
      <Grid container>
      <Route path={['/main', '/quiz']} component={MainBar} />
      </Grid>
      <Grid container>
        <Route path="/" exact component={Landing} />
        <Route path="/main" exact component={Main} />
        <Route path="/quiz" exact component={Quiz} />
      </Grid>
    </Grid>
  );
}

export default Layout;

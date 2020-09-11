import React from 'react';
import {
  Link
} from "react-router-dom";
import { Grid, Typography } from '@material-ui/core';

const Main : React.FC = () => (
  <Grid container
  alignContent='center'
  alignItems='center'>
    <Grid item xs={12}>
      <Typography variant="h3">
        Front End:
      </Typography>
      <Link to="/quiz">
        Start Quiz
      </Link>
    </Grid>
  </Grid>
)

export default Main;

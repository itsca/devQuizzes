import React from 'react';
import { Grid } from '@material-ui/core';
import Categories from '../Categories/Categories';
import Quizzes from '../../Data/combinedQuizzes'

const Main : React.FC = () => (
  <Grid container
  alignContent='center'
  alignItems='center'>
    <Grid item xs={12}>
      <Categories quizzes={Quizzes}/>
    </Grid>
  </Grid>
)

export default Main;

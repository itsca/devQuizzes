import React from 'react';
import { Grid } from '@material-ui/core';
import Categories from '../Categories/Categories';
import Quizzes from '../../Data/combinedQuizzes'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Main : React.FC = () => {
  let { path, url } = useRouteMatch();
  return (
    <Grid container
    alignContent='center'
    alignItems='center'>
      <Grid item xs={12}>
        <Switch>
          <Route exact path={path}>
            <Categories quizzes={Quizzes} />
          </Route>
          <Route path={`${path}/quiz/:quizId`}>
            <Quiz quizzes={Quizzes} />
          </Route>
        </Switch>
        {/* <Route path="/quiz" children={<Quiz quizzes={Quizzes} />} /> */}
        {/* <Route path="/" exact children={<Categories quizzes={Quizzes} />} /> */}
      </Grid>
    </Grid>
  )
}

export default Main;

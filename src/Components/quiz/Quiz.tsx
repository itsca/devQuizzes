import { Grid, LinearProgress, makeStyles, Theme, withStyles } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';
import { useParams } from 'react-router-dom';
import Question, {QuestionInterface} from '../Question/Question';

export interface QuizInterface {
  category: string,
  name: string,
  id: string,
  iconUrl: string,
  questions: QuestionInterface[]
}

interface Props {
  quizzes: {
    [key: string]: QuizInterface
  }
}

interface RouteParams {
  quizId: string
}

const useStyles = makeStyles({
  root: {
    minHeight: '100vh'
  },
});

const FullWidthProgressBar = withStyles((theme: Theme) => ({
  root: {
    width: '100%'
  },
}))(LinearProgress);

const Quiz : React.FC<Props> = (props) => {
  const classes = useStyles();
  let { quizId } = useParams<RouteParams>();
  let questions: QuestionInterface[] = Object.keys(props.quizzes).filter((k, i) => props.quizzes[k].id === quizId).map((v) => { return props.quizzes[v].questions})[0]
  console.log('Questions are', questions)
  return (
    <Grid className={`quiz ${classes.root}`} container>
      <FullWidthProgressBar variant="determinate" value={60} color="secondary" />
      <Grid item xs>
        <Grid container direction='column' alignContent='center' spacing={2}>
          {
            questions.map((question) => {
              return <Question data={question}/>
            })
          }
          {/* <Grid item xs={6}>
            <Alert severity="success">
              <AlertTitle>Correct!</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Quiz;

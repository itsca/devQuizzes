import { Button, Card, CardActions, CardContent, CardHeader, Grid, LinearProgress, makeStyles, Theme, Typography, withStyles } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Question, {QuestionInterface} from '../Question/Question';

export interface QuizInterface {
  category: string,
  name: string,
  id: string,
  iconUrl: string,
  questions: QuestionInterface[]
}

interface Answer {
  questionIndex: number,
  value: string
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
  const history = useHistory();
  const classes = useStyles()
  const { quizId } = useParams<RouteParams>()
  let [ currentQuestionIndex, setCurrentQuestionIndex ] = useState<number>(0)
  let [ answers, setAnswers ] = useState<Answer[]>([])
  let [ correctAnswers, setCorrectAnswers ] = useState<Answer[]>([])
  let [ isFinished, setIsFinished ] = useState<boolean>(false)
  const questions: QuestionInterface[] = Object.keys(props.quizzes).filter((k, i) => props.quizzes[k].id === quizId).map((v) => { return props.quizzes[v].questions})[0]
  const quizzProgress: number = ((currentQuestionIndex + 1) / questions.length) * 100
  const isLastQuestion = currentQuestionIndex + 1 === questions.length
  const isFinalAnswer: boolean = answers.length === questions.length
  let finalScore: number = isFinished ? (correctAnswers.length / answers.length) * 100 : 0

  const handleNextQuestion = (questionIndex: number, value: string): void => {
    let currentAnswers: Answer[] = [...answers]
    setCurrentQuestionIndex(!isLastQuestion ? currentQuestionIndex + 1 : currentQuestionIndex)
    
    currentAnswers.push({questionIndex, value})
    setAnswers(currentAnswers)
    console.log('Answers are now', currentAnswers)
  }

  const processAnswers = ():void => {
    const extractedCorrectAnswers: Answer[] = answers.filter((answer, i) => answer.value === questions[answer.questionIndex].correct)
    setCorrectAnswers(extractedCorrectAnswers)
    setIsFinished(true)
    console.log('Correct answers are ', extractedCorrectAnswers)
  }

  const getScoreSeverity = (score: number):"success" | "info" | "warning" | "error" | undefined => {
    if (score >= 70 && score < 80 ) {
      return "info"
    }
    if (score >= 80 ) {
      return "success"
    }
    return "error"
  }

  const getScoreMessage = (score: number):string => {
    if (score >= 70 && score < 80 ) {
      return "You passed, but there's still room for improvement."
    }
    if (score >= 80 ) {
      return "You passed, congratulations!."
    }
    return "No luck this time, but you can take this quizz again whenever you like."
  }

  useEffect(() => {
    if (isFinalAnswer) {
      processAnswers()
    }
  }, [answers])

  return (
    <Grid className={`quiz ${classes.root}`} container>
      <FullWidthProgressBar 
        variant="determinate" 
        value={quizzProgress} 
        color="secondary" 
      />
      <Grid item xs>
        {
          !isFinished ? 
          (
            <Grid container direction='column' alignContent='center' spacing={2}>
              <Question 
                data={questions[currentQuestionIndex]}
                onNextQuestion={(value) => handleNextQuestion(currentQuestionIndex, value)} 
                questionNumber={`${currentQuestionIndex + 1}/${questions.length}`} 
                isLastQuestion={isLastQuestion}
              />
              {/* <Grid item xs={6}>
                <Alert severity="success">
                  <AlertTitle>Correct!</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                  </Alert>
              </Grid> */}
            </Grid>
          ) : 
          (
            <Grid container direction='column' alignContent='center' spacing={2}>
              <Grid item xs={6} className='Results'>
                <Card>
                  <CardHeader
                    title={'Results'}
                    subheader={finalScore >= 70 ? 'Passed!' : 'Failed!'}
                  />
                  <CardContent>
                    <Alert severity={getScoreSeverity(finalScore)}>
                      <AlertTitle>{`Your Score ${finalScore}`}</AlertTitle>
                      {getScoreMessage(finalScore)}
                    </Alert>
                  </CardContent>
                  <CardActions>
                    <Grid container justify='flex-end'>
                      <Button size="small" onClick={() => history.push('/main')}>{'Finish'}</Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          )
        }
      </Grid>
    </Grid>
  );
}

export default Quiz;

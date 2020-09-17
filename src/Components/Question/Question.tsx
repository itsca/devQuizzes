import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, makeStyles, Grid, CardContent, CardHeader, Button, CardActions } from '@material-ui/core';

export interface QuestionInterface {
  title: string,
  options: {
    a: string,
    b: string,
    c: string,
    d: string
  },
  correct: string
}

interface QuestionProps {
  data: QuestionInterface,
  questionNumber: string,
  onNextQuestion: (value: string) => void,
  isLastQuestion: boolean
}


function Question(props: QuestionProps) {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));
  
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const {data, questionNumber, onNextQuestion, isLastQuestion} = props

  function handleChange(event: React.ChangeEvent<unknown>) {
    setValue((event.target as HTMLInputElement).value);
  }

  return (
    <Grid item xs={6} className='Question'>
      <Card>
      <CardHeader
          title={data.title}
          subheader={questionNumber}
        />
        <CardContent>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="question"
              name="question"
              className={classes.group}
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value={'a'} control={<Radio />} label={data.options.a} />
              <FormControlLabel value={'b'} control={<Radio />} label={data.options.b} />
              <FormControlLabel value={'c'} control={<Radio />} label={data.options.c} />
              <FormControlLabel value={'d'} control={<Radio />} label={data.options.d} />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Grid container justify='flex-end'>
            <Button size="small" disabled={!value} onClick={() => onNextQuestion(value)}>{isLastQuestion ? 'Submit' : 'Next'}</Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Question;

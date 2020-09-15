import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, makeStyles } from '@material-ui/core';

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
  data: QuestionInterface
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
  const [value, setValue] = React.useState('female');

  function handleChange(event: React.ChangeEvent<unknown>) {
    setValue((event.target as HTMLInputElement).value);
  }

  return (
    <div className='Question'>
      <Card>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{props.data.title}</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value={1} control={<Radio />} label={props.data.options.a} />
          <FormControlLabel value={2} control={<Radio />} label={props.data.options.b} />
          <FormControlLabel value={3} control={<Radio />} label={props.data.options.c} />
          <FormControlLabel value={4} control={<Radio />} label={props.data.options.d} />
        </RadioGroup>
      </FormControl>
      </Card>
    </div>
  );
}

export default Question;

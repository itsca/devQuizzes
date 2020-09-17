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
    <Grid item xs={6} className='Question'>
      <Card>
      <CardHeader
          title={props.data.title}
          subheader={`1/15`}
        />
        <CardContent>
          <FormControl component="fieldset" className={classes.formControl}>
            {/* <FormLabel component="legend">{props.data.title}</FormLabel> */}
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
        </CardContent>
        <CardActions>
          <Grid container justify='flex-end'>
            <Button size="small">Submit</Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Question;

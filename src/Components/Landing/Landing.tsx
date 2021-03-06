import React from 'react';
import { Grid, Typography, Box, makeStyles, Button, withStyles, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  whiteText: {
    color: 'white',
  },
  welcomeParagraph: {
    padding: '0 20%',
  },
  maxHeight: {
    height: '100%',
  }
});

const clickCheckQuizzesHandler = (history: any) => {
  // check any type on history
  history.push("/main");
}

const Landing: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box display='flex' flex='1' bgcolor='#6E81FF' style={{ height: '100vh' }}>
      <Grid container className="Landing" justify='flex-start' alignContent='center'>
        <Grid item sm={12} md={6}>
            <Typography variant="h1" component="h2" className={classes.whiteText} align='center'>
              Welcome,
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom className={classes.whiteText} align='center'>
              to DevQuizzes
            </Typography>
            <Typography variant="body2" className={`${classes.whiteText} ${classes.welcomeParagraph}`} align='center'>
              Free technology quizzes to practice your skills and knowledge, no registration required!, just free tech quizzes on demand for your delight and enoyment :).
            </Typography>
        </Grid>
        <Grid item sm={12} md={6} direction='column' justify='center'>
            <Grid className={classes.maxHeight} container xs={12} justify='center' alignContent='center' direction='column'>
              <Button 
                variant="contained" 
                color="secondary"
                onClick={event => clickCheckQuizzesHandler(history)}
                size='large'
              >
                Check the quizzes
              </Button>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;

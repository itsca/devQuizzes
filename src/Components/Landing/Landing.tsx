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

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#61C9FF',
    '&:hover': {
      backgroundColor: '#5891E8',
    },
  },
}))(Button);

const clickCheckQuizzesHanlder = (history: any) => {
  // check any type on history
  history.push("/Main");
}

const Landing: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box display='flex' flex='1' bgcolor='#6E81FF' style={{ height: '100vh' }}>
      <Grid container className="Landing" justify='flex-start' alignContent='center'>
        <Grid item sm={12} md={6}>
            <Typography variant="h1" component="h2" className={classes.whiteText}>
              Welcome,
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom className={classes.whiteText}>
              to DevQuizzes
            </Typography>
            <Typography variant="body2" className={`${classes.whiteText} ${classes.welcomeParagraph}`}>
              Free technology quizzes to practice your skills and knowledge, no registration required!, just free tech quizzes on demand for your delight and enoyment :).
            </Typography>
        </Grid>
        <Grid item sm={12} md={6} direction='column' justify='center'>
            <Grid className={classes.maxHeight} container xs={12} justify='center' alignContent='center' direction='column'>
              <ColorButton 
                variant="contained" 
                color="primary"
                onClick={event => clickCheckQuizzesHanlder(history)}
                size='large'
              >
                Check the quizzes
              </ColorButton>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;

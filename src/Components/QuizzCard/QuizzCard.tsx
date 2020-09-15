import React from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, Grid, Theme, Typography, withStyles } from '@material-ui/core';
import { QuizInterface } from '../Quiz/Quiz';
import { purple } from '@material-ui/core/colors';

interface Props {
  quiz: QuizInterface
}

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#61C9FF',
    '&:hover': {
      backgroundColor: '#5891E8',
    },
  },
}))(Button);

const QuizzCard: React.FC<Props> = (props) => {
  const {quiz} = props
  return (
    <Grid item xs>
      <Card>
        <CardHeader
          avatar={
            <Avatar alt={quiz.name} src={quiz.iconUrl} />
          }
          title={quiz.name}
          subheader={`${quiz.questions.length} questions`}
        />
        <CardContent>
          <ColorButton 
                  variant="contained" 
                  color="primary"
                  onClick={event => console.log('go to quiz')}
                  size='large'
                >
                  Start Quiz
                </ColorButton>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default QuizzCard;

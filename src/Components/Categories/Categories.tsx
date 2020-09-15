import React from 'react';
import { Grid } from '@material-ui/core';
import { QuizInterface } from '../Quiz/Quiz'

interface Props {
  quizzes: {
    [key: string]: QuizInterface
  }
}

const Categories: React.FC<Props> = (props: Props) => {
  return (
    <Grid className="Categories">
      Categories
    </Grid>
  );
}

export default Categories;

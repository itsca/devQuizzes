import React, { useState } from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { QuizInterface } from '../Quiz/Quiz'
import QuizzCard from '../QuizzCard/QuizzCard';

interface Props {
  quizzes: {
    [key: string]: QuizInterface
  }
}

const useStyles = makeStyles({
  root: {
    padding: '10%',
    minHeight: '100vh'
  },
});

/**
 * Extracts the categories from the quizzes and makes sure there only one of each.
 * @param quizzes
 */
const extractCategories = (quizzes: Props['quizzes']): string [] => {
  let extractedCategories: string[] = []
  for (let [key, value] of Object.entries(quizzes)) {
    if (extractedCategories.indexOf(value.category) === -1) extractedCategories.push(value.category);
  }
  return extractedCategories
}

const Categories: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [extractedCategories, setExtractedCategories] = useState(extractCategories(props.quizzes))
  return (
    <Grid className={`Categories ${classes.root}`} container>
      {
        extractedCategories.map((category, i) =>
          <Grid container direction='column' key={i}>
            <Typography variant="h2" gutterBottom>
              {category}
            </Typography>
            <Grid container spacing={2}>
              {
                Object.keys(props.quizzes)
                  .filter((k, i) => props.quizzes[k].category === category)
                  .map(k => <QuizzCard quiz={props.quizzes[k]}/>)
              }
            </Grid>
          </Grid>
      )}
    </Grid>
  );
}

export default Categories;

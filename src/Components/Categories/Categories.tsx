import React, { useState } from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import { QuizInterface } from '../Quiz/Quiz'

interface Props {
  quizzes: {
    [key: string]: QuizInterface
  }
}

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
  const [extractedCategories, setExtractedCategories] = useState(extractCategories(props.quizzes))
  return (
    <Grid className="Categories">
      {extractedCategories.map((category, i) => <Grid container key={i}>
        <Typography variant="h2">
          {category}
        </Typography>
        {
          Object.keys(props.quizzes)
            .filter((k, i) => props.quizzes[k].category === category)
            .map(k => <Card>
              <Typography>
                {props.quizzes[k].name}
              </Typography>
            </Card>)
        }
      </Grid>)}
    </Grid>
  );
}

export default Categories;

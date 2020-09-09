import React from 'react';
import Question, {QuestionInterface} from '../Question/Question';

function Quiz() {
  let questions: QuestionInterface[] = [
    {
      tittle: 'What is react',
      option1: 'Ui library',
      option2: 'Ui FrameWork',
      option3: 'BackEnd Framework',
      option4: 'Hybrid Framework',
      correctOptions: 1
    }
  ]
  return (
    <div className='Quiz'>
      {
        questions.map((question) => {
          return <Question data={question}/>
        })
      }
    </div>
  );
}

export default Quiz;

import React from 'react';
import Question, {QuestionInterface} from '../Question/Question';

export interface QuizInterface {
  category: string,
  name: string,
  id: string,
  iconUrl: string,
  questions: QuestionInterface[]
}

const Quiz : React.FC = () => {
  let questions: QuestionInterface[] = [
    {
      title: 'What is react',
      options: {
        a: 'Ui library',
        b: 'Ui FrameWork',
        c: 'BackEnd Framework',
        d: 'Hybrid Framework',
      },
      correct: 'a'
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

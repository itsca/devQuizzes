import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Question from './Question';
import reactQuizz from '../../Data/quizzes/react.json'

Enzyme.configure({ adapter: new Adapter() });

describe('Question Component', () => {
   it('renders without crashing', () => {
      shallow(<Question data={reactQuizz.questions[0]}/>);
    });
});

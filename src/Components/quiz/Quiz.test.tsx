import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Quiz from './Quiz';
import quizzes from '../../Data/combinedQuizzes'


Enzyme.configure({ adapter: new Adapter() });

describe('Quiz2 Component', () => {
   it('renders without crashing', () => {
      shallow(<Quiz quizzes={quizzes}/>);
    });
});

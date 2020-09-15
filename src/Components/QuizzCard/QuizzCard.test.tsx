import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuizzCard from './QuizzCard';
import reactQuizz from '../../Data/quizzes/react.json'

Enzyme.configure({ adapter: new Adapter() });

describe('QuizzCard Component', () => {
   it('renders without crashing', () => {
      shallow(<QuizzCard quiz={reactQuizz} />);
    });
});

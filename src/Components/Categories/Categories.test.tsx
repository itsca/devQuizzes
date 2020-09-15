import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Categories from './Categories';

Enzyme.configure({ adapter: new Adapter() });

describe('Categories Component', () => {
   it('renders without crashing', () => {
      shallow(<Categories />);
    });
});

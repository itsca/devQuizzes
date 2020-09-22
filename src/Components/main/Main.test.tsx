import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import Main from './Main'

Enzyme.configure({ adapter: new Adapter() });
describe('test', () => {
  it('renders', ()=>{
    shallow(<Main/>);
  })
})


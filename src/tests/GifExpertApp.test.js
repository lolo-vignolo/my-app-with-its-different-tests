import { shallow } from 'enzyme';
import React from 'react';

import GifExpertApp from "../GifExpertApp.js"

describe("it will test <GitExpertApp", ()=>{

 test('reander de DOM', () => {

    const wrapper = shallow(<GifExpertApp /> )
    expect(wrapper).toMatchSnapshot();

     
 })
 


})
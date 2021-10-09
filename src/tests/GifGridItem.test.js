import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from '../components/GifGridItem';

const title = "my web site";
const url = "http://picture.png"

const wrapper = shallow( <GifGridItem title={title} url = {url} />)


describe('Mostrar que <GifGridItem /> trabaj correctamente', () => {

    test ("testing", ()=>{
        //to see that the render of my DOM is working properly
        expect(wrapper).toMatchSnapshot();
            

    });
    
    // to see if title live inside a <p> </p> tag.
    test ("Does it have a paragraphs", ()=>{
        const paragraph = wrapper.find('p');
        expect(paragraph.text()).toBe(title);
    })

    // to figure out if 'src' and 'alt' are the received props for real. 

    test ('testing the pictue', ()=>{
        const picture = wrapper.find('img');
        expect(picture.prop('src')).toBe(url)
    })

    test ('testing the pictue', ()=>{
        const picture = wrapper.find('img');
        expect(picture.prop('alt')).toBe(title)
    })

    // to evaluate a clssName

     test('should bring the class card animate__animated animate__bounce', () => {
        const myClass = wrapper.find("div") ;
        expect (myClass.hasClass("animate__animated")).toEqual(true)

     })
     

    }) 
    



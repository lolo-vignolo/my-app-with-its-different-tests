import { shallow } from 'enzyme';
import React from 'react';
import AddCategory from "../components/AddCategory"

describe("testinf the compomnenet called", ()=>{

    test('shoul render an specific HTML ', () => {

        const newCategory = ()=>{}

        const wripper = shallow(<AddCategory newCategory = {newCategory} />)
        expect(wripper).toMatchSnapshot();
    })

    test('testing input (change)', () => {


        const newCategory = ()=>{}
        const wripper = shallow(<AddCategory newCategory = {newCategory} />)

        const input = wripper.find("input");
        const value = "change call an event {} where there is a target, that will receive a new value"

        // here I dont expect anything, I will only make a simulation of the change action.

        input.simulate("change", {target: {value} });

        const paragrapgh = wripper.find('p');
        
        expect(paragrapgh.text().trim()).toBe(value);
    })

    test('testing submit, in this case submit doesnt have to post the information', () => {

        //here I have to add Jest.fn(), because this component neww to receive lot of information, in this way it is easier.
        const newCategory = jest.fn();
        let wripper = shallow(<AddCategory newCategory = {newCategory} />) 
        
        //////////////////////////////////////////////////////////
        // si yo puse newcategory y wripper como elementos globales, yo necesitaria utilizar el codigo que esta abajo
        // de esta forma limpio todo para volver a checkear en cada test, aqui no es necesario por que llamo a esas consatantes siempre localmente.

        // beforeEach(() => {
        //     jest.clearAllMocks(); // it is not funtional in this case, but he wrote it.
        //     wripper = shallow(<AddCategory newCategory = {newCategory} />) 
        // })


        const form = wripper.find("form");
        form.simulate("submit", {preventDefault(){}}); //there is not an specific event to target here, so I need to put the function in relation with this event.
        

        expect(newCategory).toHaveBeenCalled();
    })

    test('simulate (change, submit, length, calls', () => {
        const newCategory = jest.fn();
        const wripper = shallow(<AddCategory newCategory = {newCategory} />) 

        const value = "testing"
        

        wripper.find("input").simulate("change", {target:{value}});
       
        wripper.find("form").simulate("submit",{preventDefault(){}});

        expect(newCategory).toHaveBeenCalled();
        expect(wripper.find('input').prop("value")).toBe("");


        
    })
    
    
    
    



})
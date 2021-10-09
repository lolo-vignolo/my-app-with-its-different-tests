import { shallow } from 'enzyme';
import React from 'react';
import GifGrid from '../components/GifGrid';
import { useFetchGif } from '../Hooks/useFetchGif';
jest.mock('../Hooks/useFetchGif');



describe("testing a component with properties, and a fetch inside", ()=>{

    const category = "Peaky blinders"

    test('observar si se renderiza correctamente ', () => {

     
        const wrapper = shallow( <GifGrid Category = {category} />)
        expect(wrapper).toMatchSnapshot();


       })

       


        test('it should shows items when images are charged with useFeTCHgIF ', () => {
            
            const gifs = [{
                id:"abc",
                url:"http://something.jnp",
                title : "testing my code"
            }]

            useFetchGif.mockReturnValue({
                data: gifs,
                loading: true
               });   
    
            
        })
        


        
    })



    



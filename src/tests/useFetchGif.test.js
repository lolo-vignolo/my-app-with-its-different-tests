import getGifs from "../helpers/getGifs";
import {renderHook} from '@testing-library/react-hooks';


describe("prubas en el hook useFechGifs", ()=> {

    test('should return the initial state', () => {
        
        const { result } = renderHook( ()=> { useFetchGif('Peaky Blinders');});
        const {data , loading} = result.current;

        console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);


      
    })

    test ("debe retornar un arreglo de img y el loading en false", async()=>{

        const { result , waitForNextUpdate } = renderHook( ()=> { useFetchGif('Peaky Blinders');});
        await waitForNextUpdate();
        const {data , loading} = result.current;

        console.log(data, loading);

        expect(data).toEqual(10);
        expect(loading).toBe(false);
        
    })
    


})
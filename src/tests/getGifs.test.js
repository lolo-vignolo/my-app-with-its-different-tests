import React from 'react';
import getGifs from '../helpers/getGifs';

describe("testing component get Gifs", ()=>{

    test('should bring 10 elements', async () => {
        
        const gifs = await getGifs("Peaky Blinders");
        expect(gifs.length).toBe(10);

    })

    test('should has a category', async () => {
        
        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);

    })
    




})
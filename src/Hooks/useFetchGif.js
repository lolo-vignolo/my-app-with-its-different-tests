import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";



export const useFetchGif = (Category)=>{

    const [state, setstate] = useState({
        data : [],
        loading: true
    });

    useEffect(() => {

        getGifs(Category)
        .then(img =>{
            setTimeout (()=>{
                setstate({
                    data: img,
                    loading : false
                });
                 
            }, 1500);

        })}
            
       
     
    , [Category]);

    return state;
} 


import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


// import PropTypes from 'prop-types'

const GifExpertApp = () => {
    
    // const categories = ['programming', 'finances', 'sports'];

    let [categories, setcategory] = useState(['Peaky Blinders']);

    // const HandleApp = ()=>{
    //         // setcategory ([...category, "value"]);
    //         setcategory(()=> [...category, "value"]);
    // }
    

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory newCategory={setcategory} />
          <hr />
            
            
          
          <ol>
                {
                categories.map((categoria)=>{
                    return(
                    <GifGrid 
                            key = {categoria}
                            Category= {categoria}
                    /> 
                    );
                })
                }

          </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp

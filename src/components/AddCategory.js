
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({newCategory}) => {

    const [userImput, setuserImput] = useState("punch");

    const HandleImput = (event)=> {
        setuserImput(event.target.value);
    }

    const HandleSubmit = (event)=>{
        event.preventDefault();
        if(userImput.length>2){
       // setcategory(()=> [...category, "value"]);, para reemplazar esto del otro componente hago:
       newCategory((category)=>[userImput, ...category]);
       setuserImput("");
        }

 
    }

    return (
        
            <form onSubmit = {HandleSubmit}>
                <input
                    type= "text" 
                    value = {userImput}
                    onChange= {HandleImput}

                />

            </form>
        
    )
}

AddCategory.propTypes = {
    newCategory: PropTypes.func.isRequired,

};


export default AddCategory


{/* <button onClick= {HandleApp}>New element </button> */}


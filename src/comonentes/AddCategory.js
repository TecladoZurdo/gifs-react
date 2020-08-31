import React, {useState}from 'react'
import { PropTypes } from 'prop-types';


export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState(''); // 

    const handleInputChage = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( inputValue.trim().length > 2) {
            setCategories( cate =>[ inputValue,...cate]);
            setInputValue('');
        }
        console.log('Submit echo')
    }

    return (
        <form onSubmit={ handleSubmit }>       
          <input 
            type="text"
            value= {inputValue}
            onChange= { handleInputChage }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

import React,{useState} from 'react';
import { AddCategory } from './comonentes/AddCategory';
import { GifGrid } from './comonentes/GifGrid';

const GifExpertApp = () =>{
   
   
    const [categories, setCategories] = useState(['Samuray']);

   

    return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={ setCategories } />
    <hr />
   
    <ol>
    {
        categories.map( (category) =>(
         <GifGrid 
         key={category} 
         category={ category }
         />
        ))
    }
    </ol>
    </>
   )
};



export default GifExpertApp;

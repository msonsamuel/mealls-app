import { useState } from "react";
import { useGlobalContext } from "../Context";
const SearchMeals=()=>{
    const[text, setText]=useState('');
    const {setSearchTerm, randomMeals}=useGlobalContext();
    const handlechange=(e)=>{
        setText(e.target.value) 
    }
    const handlesubmit=(e)=>{
          e.preventDefault();
            if(text){
                setSearchTerm(text);
                   setText('');
                      }
                          }
            const handleRandomMeals=()=>{
                    setSearchTerm('');
                        setText('');
                           randomMeals();
                               }
    return <section className="search-container mt-5 ">
        <form onSubmit={handlesubmit}>
            <input type="text" className="form-input" value={text} onChange={handlechange} placeholder="type favorite meal"/>
            <button type="submit" className="btn" > search </button>
            <button type="button" className="btn btn-hipster" onClick={handleRandomMeals} > surprise Me !</button>
        </form>
    </section>
    }
    export default SearchMeals;
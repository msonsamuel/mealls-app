import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
const AppContext =React.createContext();
const allMealsUrl='https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealsUrl='https://www.themealdb.com/api/json/v1/1/random.php';
const AppProvider=({children})=>{
     const[meals, setMeals]=useState([]);
     const[loading, setLoading]=useState(false);
    const[searchTerm, setSearchTerm]=useState('');
    const[showModals, setShowModals]=useState(false);
    const[selectedMeal, setSelectedMeal]=useState(null);
    const [favorites, setFavorites]=useState([]);

const fetchMeals= async(url)=>{
      setLoading(true)
            try{
              const {data} =await axios(url);
                setMeals(data.meals)
                  }
                     catch(error){
                        } 
                          setLoading(false);
                             }
const randomMeals=()=>{
       fetchMeals(randomMealsUrl)  ;
         }
const selectMeals=(idMeal,favoriteMeal)=>{
      let meal;
         if(favoriteMeal){
           meal=favorites.find((meal)=>meal.idMeal===idMeal)
             }
                else{
                   meal=meals.find((meal)=>meal.idMeal===idMeal)
                      }

                        setSelectedMeal(meal);
                         setShowModals(true);
                          }
const closeModal=()=>{
           setShowModals(false)
              }
const addToFavorite=(idMeal)=>{
      const meal=meals.find((meal)=>meal.idMeal===idMeal);
            const alreadyFavorite= favorites.find((meal)=>meal.idMeal===idMeal);
                  if(alreadyFavorite) return
                      const updatedFavorite=[...favorites,meal];
                            setFavorites(updatedFavorite);
                                }
     const removeFromFavorite=(idMeal)=>{
             const updatedFavorites=favorites.filter((meal)=>meal.idMeal!==idMeal)
                   setFavorites(updatedFavorites);
                        }
     useEffect(()=>{
          fetchMeals(allMealsUrl);   
             },[]);
useEffect(()=>{
             if(!searchTerm)
                return
                   fetchMeals(`${allMealsUrl}${searchTerm}`);   
                      },[searchTerm]);
     
return <AppContext.Provider value={
                                  {loading, meals, setSearchTerm, randomMeals,
                                  showModals,selectedMeal, selectMeals, closeModal,
                                  addToFavorite,removeFromFavorite,favorites
                                   }
                                  }>
{children}
</AppContext.Provider>
}
export const useGlobalContext =()=>{
     const context = useContext(AppContext);
     return context;
}
export {AppContext,AppProvider}
import React, { useEffect, useState } from 'react'
import styles from './Meals.module.css'
import axios from 'axios'
import { BounceLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
const Meals = () => {
  const [categories, setCategories] = useState([]);
const [meals, setMeals] = useState([]);
const [loding, setLoding] = useState(false);


  const [selectedCategory, setSelectedCategory] = useState("All");
const getCategories = async () => {
    
    try {
      const {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      
      setCategories(data.meals)
      
    } catch (error) {
      console.log(error);
      
    }
  }
const getMeals= async (selectedCategory) => {

  try {

setLoding(true)
    
    const { data }= await axios.get(`${selectedCategory === "All" ? "https://www.themealdb.com/api/json/v1/1/search.php?s=" :`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`} `)
    setMeals(data.meals)
  
    
  } catch (error) {
    console.log(error);
    
  }finally{
    setLoding(false)
  }

}
  useEffect(() => {
    getCategories();
  },[]);

useEffect(() => {
 
getMeals(selectedCategory);

}, [selectedCategory]);


  return (
    <>
    <div className='min-h-dvh'>
    <h1 className='font-bold text-4xl py-10 mb-2.5 italic text-orange-primary'>Learn, Cook, Eat Your Food</h1>
    <ul className='flex flex-wrap gap-5 '>
      <li  
      onClick={() => {
        setSelectedCategory("All")
     
        
      }}
      className={`${selectedCategory === "All" && styles.active} border-2 border-gray-300 py-2.5 px-2 rounded-3xl text-xl cursor-pointer hover:bg-white`}>All</li>
    {categories.map((category,index) => <li
    onClick={() => {
      setSelectedCategory(category.strCategory)
   
      
    }}
    className={`${selectedCategory === category.strCategory && styles.active} border-2 border-gray-300 py-2.5 px-2 rounded-3xl text-xl cursor-pointer hover:bg-white`}
    key={index} >
      {category.strCategory}
    </li>)}

    </ul>
    {loding === true? <BounceLoader className='mx-auto '/> :
    <div className='flex flex-wrap py-10 '>
      {meals.map((meal)=>
      <div key={meal.idMeal}  className='sm:w-full md:w-[50%] lg-w-[33.333333%] xl:w-[25%] text-center p-3'>

        <div className="inner bg-white rounded-3xl group m-3">
        <img src={meal.strMealThumb} className='w-[50%]  rounded-full mx-auto transition-transform duration-800 group-hover:rotate-360 '    alt={meal.strMeal}/>
<h2 className='font-bold text-xl italic'>{meal.strMeal}</h2>
{meal.strArea !==undefined && <h3 className='italic '><i className="fa-solid fa-earth-americas text-green-primary" ></i>   {meal.strArea}</h3>}

<Link to={`/mealdetails/${meal.idMeal}`} className='bg-green-primary block w-fit mx-auto p-3 my-1 mt-2 rounded-3xl text-white'>View Recipe</Link>

</div>
      </div>
      )}

</div>
    }
    </div>
    </>
  )
}

export default Meals

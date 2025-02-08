import React, { useEffect, useState } from 'react'
import styles from './Mealdetails.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const Mealdetails = () => {
  const {id} = useParams()
  const [mealDetails, setMealDetails] = useState([])
  const [errMessage, setErrMessage] = useState("")


  const getMealdetails = async (id) => {

try {
  setErrMessage("")
  const {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
 
  if(data.meals === null){
    throw new Error("NO meal found with this id")
  }
  setMealDetails(data.meals)

  
} catch (error) {
  setErrMessage(error.message)
 
  
}}

useEffect(()=>{
getMealdetails(id)

},[])
  return (
    <div className='min-h-dvh '>
      {errMessage && <p className=' text-center text-red-500 pt-40 text-5xl font-bold'>{errMessage} !</p>}
      {mealDetails.map(meal => <div key={meal.idMeal} className='pb-10'>

<h1 className='italic text-6xl font-bold py-10'>{meal.strMeal}</h1>
<img src={meal.strMealThumb} alt={meal.strMeal} className='w-[30%] rounded-4xl'/>

<p className='m-4 font-bold italic'>{meal.strInstructions}</p>



<div className="flex flex-wrap">
<Link to={meal.strYoutube} className='block w-fit mx-auto bg-red-500 text-white py-2 px-4 rounded-2xl'>Youtube</Link>
{meal.strSource !== null && <Link to={meal.strSource} className='block w-fit mx-auto bg-green-primary text-white py-2 px-4 rounded-2xl'>Source</Link>}
</div>
      </div>

        
      )}
    </div>
  )
}

export default Mealdetails

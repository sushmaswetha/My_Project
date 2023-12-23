import { useState, useEffect } from "react";
import axios from "axios";
import MealItems from './Mealitems.jsx'

export default function Meals(){
    const [mealdata, setMealdata] = useState([])

    useEffect(()=>{
        mealsdata();
    },[]);

    async function mealsdata(){
        let res = await axios.get('http://localhost:3002/meals');
        setMealdata(res.data)
    }

    return(
        <>
        <ul id ="meals">
            {mealdata.map((meal)=>(
                <MealItems key={meal.id} meal ={meal}/>
))}
        </ul>
        </>
    )
}
import { useContext } from "react"
//import { currency_formatter } from "../util/formatting.js"
import CButton from "../UI/CustomButton.jsx"
import { CartContext } from "./Cartcontext.jsx"

export default function MealItems({meal}){
    const cartCtx = useContext(CartContext)

    function handleAddItem(){
        console.log("welcome")
        cartCtx.addItem(meal)
    }

    return (
        <li className="meal-item"> 
            <img src={`http://localhost:3002/${meal.image}`} alt={meal.name}/>
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-description" >{meal.description}</p>
                <p className="meal-item-price">₹{meal.price}</p>
            </div>
            <p className="meal-item-actions">
                <CButton onClick={handleAddItem}>Add to Cart</CButton>
            </p>
        </li>
    )

}
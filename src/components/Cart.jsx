import { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "./Cartcontext";
import Button from '../UI/CustomButton'
import UserProgressContext from "../store/UserProgressContext";
import CartItems from "./CartItems";

export default function Cart(){
    const Cartctx = useContext(CartContext)
    const userProgressctx = useContext(UserProgressContext)

    const cartTotal = Cartctx.items.reduce((totalPrice, item)=> totalPrice+ item.quantity * item.price,0)

    function handleClose(){
        userProgressctx.hideCart()
    }

    function handleGoToCheckOut(){
        userProgressctx.showCheckOut()
    }

    return(
        <Modal className="cart" open ={userProgressctx.progress === 'cart'} >
            <h2> Your Cart Items: </h2>
            <ul>
                {Cartctx.items.map((item)=>(
                    <CartItems 
                    key = {item.id} 
                    name ={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onIncrease ={()=> Cartctx.addItem(item)}
                    onDecrease={()=> Cartctx.removeItem(item.id)}
                    />
              // <li key ={item.id}>{item.name} - {item.quantity} - ${item.price}x{item.quantity}</li>
                ))}
            </ul>
            <p className="cart-total">{`cart total: ₹${cartTotal}`}</p>
            <p className="modal-actions">
                <Button textOnly onClick ={handleClose}>Close</Button>
                {Cartctx.items.length>0 &&
                (<Button onClick= {handleGoToCheckOut}>Go to Checkout</Button>)}

            </p>
        </Modal>
    )
}

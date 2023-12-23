import logoImg from '../assets/logo.jpg';
import CButton from '../UI/CustomButton';
import { useContext } from 'react';
import { CartContext } from './Cartcontext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header(){
    const cartCtx = useContext(CartContext)
    const userProgressctx = useContext(UserProgressContext)

    const totalCartItems = cartCtx.items.reduce((totalNoOfItems, items)=> {
        return totalNoOfItems + items.quantity}, 0)

    function handleShowCart(){
        console.log('show cart')
        userProgressctx.showCart()
    }

    return(
        <header id="main-header">
            <div id ="title">
                <img src={logoImg} />
                <h1>Food Order App</h1>
            </div>
            <nav>
                <CButton textOnly onClick = {handleShowCart}>Cart({totalCartItems})</CButton>
            </nav>
        </header>
    )
}
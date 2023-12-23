import Modal from './Modal'
import { useContext } from 'react'
import { CartContext } from './Cartcontext'
import Button from '../UI/CustomButton'
import UserProgressContext from '../store/UserProgressContext'

export default function Checkout(){
    const cartCtx = useContext(CartContext)
    const cartTotal = cartCtx.items.reduce((totalPrice, item)=> totalPrice+ item.quantity * item.price,0)

    const userProgressCtx = useContext(UserProgressContext)

    function handleClose(){
        userProgressCtx.hideCheckOut()
    }

    function handleSubmit(event){
        event.preventDefault();

        // const fd = new FormData(event.target)
        // const customerData = Object.fromEntries(fd.entries()) // to extract inputed data and send to backend

        // fetch('http://localhost:3002/orders', {
        //     method:'POST',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         order: {
        //             items:cartCtx.items,
        //             customer: customerData
        //         }
        //     })
        // })
        console.log("In handle submit")
        console.log(userProgressCtx.progress)

        return <Modal open={userProgressCtx.progress === 'checkout'} >
            <h2>Order Successfully submitted!</h2>
        <p className='modal-actions'>
            <Button onClick={handleClose}>Close</Button>
        </p>
        </Modal>
    }


    return <Modal open={userProgressCtx.progress === 'checkout'} onClose ={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2> Checkout details: </h2>
            <p> Total Amount: ₹{cartTotal}</p>
            <Input label="Full Name:" type ="text" id="name"/>
            <Input label="Email Address:" type ="email" id="email"/>
            <Input label="Street:" type ="text" id="street"/>

            <div className='control-row'>
            <Input label="Postal Code:" type ="text" id="postal-code"/>
            <Input label="City:" type ="text" id="city"/>
            </div>

            <p className='modal-actions'>
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button>Submit Order</Button>
            </p>

        </form>
    </Modal>

}

function Input({label, id, ...props}){

    return(
        <p className='control'>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} required {...props}/>

        </p>
    )

}
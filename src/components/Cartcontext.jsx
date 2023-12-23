import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
    addItem: (item)=> {},
    removeItem: (id) => {}
})

function cartReducer(state, action){
    if(action.type === 'ADD-ITEM'){
        // console.log("In Cartreducer")
        // console.log(action.item)
        // return state
           const existingCartItemIndex = state.items.findIndex((i)=> i.id === action.item.id)
           const updatedItems = [...state.items]
            if (existingCartItemIndex>-1){
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {...existingItem, quantity:existingItem.quantity +1,}
             updatedItems[existingCartItemIndex]= updatedItem;
            } else{
             updatedItems.push({...action.item, quantity:1})
            }
            return {...state, items: updatedItems};
        }

    if(action.type ==='REMOVE-ITEM'){
            const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.id)
            const existingCartItem = state.items[existingCartItemIndex]
            const updatedItems =[...state.items]
            if(existingCartItem.quantity ===1){
                updatedItems.splice(existingCartItemIndex,1);
            }else{
                const updatedItem = {...existingCartItem, quantity:existingCartItem.quantity -1}
                updatedItems[existingCartItemIndex]= updatedItem;
            }
            return {...state, items: updatedItems}
    }
}


function CartContextProvider({children}){
   let [cart, dispatchCart] = useReducer(cartReducer, { items: [] });

   function addItem(item){
    console.log(item)
    dispatchCart({type: 'ADD-ITEM', item: item})   
}

   function removeItem(id){
    dispatchCart({type: 'REMOVE-ITEM', id:id})}

   const cartContext = {
    items: cart.items,
    addItem,
    removeItem
   };
   
   console.log(cartContext)

   return <CartContext.Provider value ={cartContext}>{children}</CartContext.Provider>
}

export {CartContextProvider}
import { writable,get } from "svelte/store";

//array of cart item objects
export const cartItems = writable<CartItem[]>([]);


//add to cart (add one)
export const addToCart = (id: string) => {
    let items = get(cartItems);
    let itemPosition = items.findIndex(
        (item) => {return item.id == id})

        //item is in cart
        if(itemPosition !== -1){
            cartItems.update(()=> {
                // loop thru all items, if it's the item we're looking for increment, otherwise just return it as is
                let updatedItems = items.map( (item) => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1};
                    }
                    return item;
                });
                return updatedItems;
            })

        }else{
            //update the writable to include a new item at the end 
            cartItems.update(()=> {
                return [...items,{id:id,quantity:1}]
            })
        }


    }

export const removeFromCart = (id:string)=>{
    let items = get(cartItems);
    let itemPosition = items.findIndex(
        (item)=> {return item.id == id}
    )
    if(items[itemPosition]?.quantity - 1 === 0){
        items.splice(itemPosition,1)
    }

    cartItems.update(()=> {
        // loop thru all items, if it's the item we're looking for decrement, otherwise just return it as is
        let updatedItems = items.map( (item) => {
            if(item.id === id){
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        });
        return updatedItems;
    })
}
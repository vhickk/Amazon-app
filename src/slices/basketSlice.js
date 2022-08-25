import { createSlice } from "@reduxjs/toolkit";


//An empty array showin the state of my slice
const initialState = 
{
  items: [],
};

// The basic functions my slic can do
// Adding to basket
// Removing from Basket

export const basketSlice = createSlice
({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => 
    {
      //spread whatever the current items( copy the current store) then add the payload that contains the product the dispatch function just passed in 
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => 
    {
        //SEARCH FOR THE INDEX OF THE FILE TO BE REMOVED
        //see if the index of the item exists by usng the state.items
        //we go through every single itemin the basket checking against the basket id if it is equal to the id passed in coming through bs tha action.payload
        const index = state.items.findIndex
        (
          (basketItem) =>basketItem.id === action.payload.id
        );
          // create a new basket(make a copy of it that can be changed)

        let newBasket = [...state.items];

        if (index >=0)
        {
          //remove the item from the basket by splicing it.......
          //cuts the item by 1
          newBasket.splice(index, 1)

        }
        else
        {
          console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in the basket`);

          //finally update the new items into the basket
         
        }
        state.items  = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

//selectTotal gets the state from state.basket.items
//the reduce function then goes ahead to loops through the items in the global store creating a total thst can be used when we call our selector
//totl starts at a price of zero before iteration

export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer;

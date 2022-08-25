import React from 'react';
import  Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Product from './Product';
import Currency from 'react-currency-formatter';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';



function CheckoutProduct
({
        id, 
        title, 
        price, 
        description, 
        category, 
        image,
        rating,
        hasPrime,
}) 
{
  const dispatch = useDispatch();

  const addItemToBasket = () => 
{
    const product = 
    {
        id, 
        title, 
        price, 
        description, 
        category, 
        image,
        hasPrime,
        rating
    };
    // Dispatching an Item(product)  as an action to the Redux Store using the Basket slice

    dispatch(addToBasket(product));
};

const removeItemFromBasket = () => 
{
    
    // Dispatching an Item(product)  as an action to the Redux Store using the Basket slice

    dispatch(removeFromBasket({ id }));
};


  return (
    <div className='grid grid-cols-5'>
       <Image
       src = {image}
       width ={200}
       height = {200}
       objectFit ='contain'
       />

       {/* MIDDLE */}
       <div className='col-span-3 mx-5'>
        <p>{title}</p>

        <div className='flex'>
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon className='h-6 text-yellow-500' />
                ))}
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity = {price} currency= 'USD' />
        
        {hasPrime &&
        (
            <div className='flex items-center space-x-2 '>
                <img loading='lazy' className='w-12 '  src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>Free Next-Day Delivery</p>
            </div>
        )}

        

       </div>

       <div className='flex flex-col space-y-2 my-auto justify-self-end'>
          <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket </button>
          <button onClick={removeItemFromBasket} className='mt-auto button'>Remove from Basket </button>
       </div>
    </div>
  );
}

export default CheckoutProduct;

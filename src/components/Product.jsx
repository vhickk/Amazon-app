import React, { useState } from 'react'
import  Image from 'next/image' 
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

// THIS CONTROLS THE RATING OF PRODUCTS

const Max_Rating = 5;
const Min_Rating = 1;

function Product({id, title, price, description, category, image}) 
{

    //ACCESSES THE DISPATCH STATE FROM REDUX
const dispatch = useDispatch();

//ACCESSES THE USE STAE HOOK TO SAVE AND UPDATE THE RATING
const [rating] = useState
(
    //JAVASCRIPT TO GENERATE A RANDOM NUMBER FROM MIN RATING TO MAXIMUM RATING
    Math.floor(Math.random() * (Max_Rating - Min_Rating + 1))+ Min_Rating
);

//USE THE USESTATE HOOK TO SAVE AND UPDATE USERS WITH PRIME
const [hasPrime]= useState
(
    Math.random() < 0.5
);

//
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

  return (
    <div className='  relative flex flex-col  m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400 '>{category}</p>

        <Image
        src = {image} height = {200} width = {200} objectFit ='contain'
        />
        
        <h4 className='my-3'>{title}</h4>

        <div className='flex'>
            {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon className='h-6 text-yellow-500' />
            ))}
        </div>

        <p className='text-xs my-2'>{description}</p>

        
        <Currency  quantity = {price} currency ='USD'/>
        
                {/* If you have prime, then render this */}
        {hasPrime &&
        (
            <div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>Free Next-Day DElivery</p>
            </div>
        )}

        <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket </button>
        
    </div>
  );
}

export default Product
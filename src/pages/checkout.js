import React from 'react'
import  Image from 'next/image' 
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession, signIn, signOut } from "next-auth/react";
import Currency from 'react-currency-formatter';

function Checkout() {

    //Get updated items from the redux store
    const items= useSelector(selectItems)
    const {data:session} = useSession();
    const total= useSelector(selectTotal)
  return (
    
        <div className='bg-gray-100'>
            <Header/>
            <main className='lg:flex max-w-screen-2xl mx-auto'>

                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image
                    src='https://links.papareact.com/ikj'
                    width={1020}
                    height={250}
                    objectFit ='contain'
                    />

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>
                         {/* JAVASCRIPT MODE */}
                         {/* IF BASKET IS EMPTY DISPLAY */}

                         {items.length ===0 ? 

                         'Your Amazon basket is empty' : 
                         'Shopping Basket'

                         }
                        </h1>

                            {/* MAP AND RENDER THE CHECKOUT PRODUCT */}

                            {items.map((items, i) => 
                            (
                                <CheckoutProduct
                                key = {i}
                                id = {items.id}
                                title = {items.title}
                                price = {items.price}
                                description= {items.description}
                                category = {items.category}
                                image = {items.image}
                                hasPrime = {items.hasPrime}
                                />

                            ))}

                    </div>

                </div>

                {/* right */}
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 &&(
                        <>
                            <h2 className='whitespace-nowrap mr-2'>
                                Subtotal({items.length} items):
                                <span className='font-bold ml-2' >
                                    <Currency quantity = {total} currency = 'USD'/>
                                </span>
                            </h2>

                            <button className = {`button mt-2 ${!session && 'from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? 'Sign in to Checkout' : "Proceed to Checkout"}
                            </button>
                    </>
                    )}
                    
                </div>
                
                

            </main>
            
        </div>
  )
}

export default Checkout
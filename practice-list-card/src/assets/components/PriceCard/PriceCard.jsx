import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({ price, features }) => {
    console.log(features)
    return (
        <div className='flex flex-col p-4 mt-4 rounded-md bg-slate-200'>
            <h2 className='text-center'>
                <span className='text-2xl font-bold text-purple-700 md:text-3xl'>${price.price}
                </span>
                <span className='text-xl font-bold md:text-2xl text-slate-700'>/month
                </span>
            </h2>
            <h1 className='my-6 text-2xl font-bold text-center md:text-2xl text-slate-800'>{price.name}</h1>

            <p className='text-xl font-semibold underline'>Features: </p>
            {
                price.features.map((feature, index) => <Features
                    key={index}
                    feature={feature}
                ></Features>)
            }

            <div className='mt-5'>
                <button className='w-full py-1 mt-auto font-bold border-2 rounded-md border-violet-600 hover:bg-violet-500 hover:text-white'>Buy Now</button>
            </div>
        </div>
    );
};
export default PriceCard;
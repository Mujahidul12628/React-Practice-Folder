import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {

    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div className='mx-12'>
            <h2 className='p-4 text-xl font-bold text-center bg-purple-300 sm:text-2xl md:text-4xl text-purple-950'>Awesome Affordable Prices</h2>
            <div className='grid gap-3 md:grid-cols-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;
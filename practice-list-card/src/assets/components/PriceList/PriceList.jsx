import React, { useEffect, useState } from 'react';

const PriceList = () => {

    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default PriceList;
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({ feature }) => {
    return (
        <div className='flex items-center my-1'>
            <CheckCircleIcon className="w-5 h-5 text-green-600" />
            <span className='ml-2'>{feature}</span>
        </div>
    );
};

export default Features;
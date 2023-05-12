import React, { useEffect } from 'react';

const DynamicTittle = (title) => {
    useEffect(() => {
        document.title = `${title} - Alpha Job Portal`
    }, [title])
};

export default DynamicTittle;
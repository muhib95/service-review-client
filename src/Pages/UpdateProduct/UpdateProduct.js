import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const review=useLoaderData();
console.log(review[0]);
    return (
        <div>
            Update
        </div>
    );
};

export default UpdateProduct;
import React, { use } from 'react';

const ProductDetailsCard = ({promise}) => {
    const data = use(promise)
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default ProductDetailsCard;
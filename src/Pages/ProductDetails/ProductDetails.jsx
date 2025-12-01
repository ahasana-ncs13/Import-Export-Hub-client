import React, { Suspense } from 'react';
import ProductDetailsCard from './ProductDetailsCard';


// const promise = (params)=> fetch(`http://localhost:3000/productinfo/${params.id}`)
// .then(res =>res.json())
const ProductDetails = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
                <ProductDetailsCard promise={promise}></ProductDetailsCard>
            </Suspense>
        </div>
    );
};

export default ProductDetails;
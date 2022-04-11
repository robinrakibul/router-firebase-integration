import React from 'react';
import useFirebase from '../useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h5>This is product page</h5>
        </div>
    );
};

export default Products;
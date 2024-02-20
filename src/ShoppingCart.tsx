import { useState } from 'react';
import { useImmer } from 'use-immer';

const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

export default function ShoppingCart() {
    const [
        products,
        setProducts
    ] = useImmer(initialProducts)

    function handleIncreaseClick(productId: any) {
        setProducts(draft => {
            const productIndex = draft.findIndex(product => product.id === productId);
            console.log(draft[productIndex])
            if (productIndex !== -1) {
                draft[productIndex].count += 1;
            }
            // productIndex.count += 1
        });
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                </li>
            ))}
        </ul>
    );
}

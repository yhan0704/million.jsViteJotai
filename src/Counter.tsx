import React from 'react';
import { atom, useAtom } from 'jotai';

export const counter = atom(0)
const Counter: React.FC = () => {
    const [count, setCount] = useAtom(counter)

    const increaseCount = () => setCount(count + 1)
    return (
        <>
            <button onClick={increaseCount}>Incrase</button>
        </>
    )
};

export default Counter;

// Uppercase.tsx
import React from 'react';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { textAtom } from './Input';

const uppercaseAtom = atom(
    (get) => get(textAtom).toUpperCase()
)
export const countAtom = atom(0)

const Uppercase: React.FC = () => {
    const setCount = useSetAtom(countAtom)
    const count = useAtomValue(countAtom)

    return (
        <>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
};

export default Uppercase;

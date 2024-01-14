// Uppercase.tsx
import React from 'react';
import { atom, useAtom } from 'jotai';

export const textAtom = atom('hello')
const uppercaseAtom1 = atom(
    (get) => get(textAtom).toUpperCase()
);

const uppercaseAtom = atom(
    (get) => get(textAtom).toUpperCase()
)

const Uppercase: React.FC = () => {
    const [uppercase] = useAtom(uppercaseAtom)
    console.log(uppercase)
    return (
        <div>Uppercase: {uppercase}</div>
    )
};

export default Uppercase;

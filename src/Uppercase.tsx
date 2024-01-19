import React from 'react';
import { atom, useAtom } from 'jotai';
import { textAtom } from './Input';
import { counter } from './Counter';

const uppercaseAtom = atom(
    (get) => get(textAtom).toUpperCase()
)

const counterAtom = atom(
    (get) => get(counter).valueOf()
)

const Uppercase: React.FC = () => {
    const [uppercase] = useAtom(uppercaseAtom);
    const [counter] = useAtom(counterAtom);

    return (
        <>
            <div>Uppercase: {uppercase}</div>
            <div>Uppercase: {counter}</div>
        </>
    )
};

export default Uppercase;
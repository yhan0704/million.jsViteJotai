// Input.tsx
import React, { ChangeEvent } from 'react';
import { atom, useAtom, useAtomValue } from 'jotai';
import { countAtom } from './Uppercase';

export const textAtom = atom('hello')

const Input: React.FC = () => {
    const [text, setText] = useAtom(textAtom)
    const count = useAtomValue(countAtom)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    return (
        <>
            <input value={text} onChange={handleChange} />
            <p>{count}</p>
        </>
    )
};

export default Input;

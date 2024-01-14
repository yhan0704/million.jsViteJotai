// Input.tsx
import React, { ChangeEvent } from 'react';
import { atom, useAtom } from 'jotai';

export const textAtom = atom('hello')

const Input: React.FC = () => {
    const [text, setText] = useAtom(textAtom)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    return (
        <>
            <input value={text} onChange={handleChange} />
            <div>{text}</div>
        </>
    )
};

export default Input;

import React, { ChangeEvent } from 'react';
import { atom, useAtom } from 'jotai';

export const textAtom = atom('hello')
// export const counter = atom(0)
const Input: React.FC = () => {
    const [text, setText] = useAtom(textAtom)
    // const [count, setCount] = useAtom(counter)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    // const increaseCount = () => setCount(count + 1)
    return (
        <>
            <input value={text} onChange={handleChange} />
            {/* <button onClick={increaseCount}>Incrase</button> */}
        </>
    )
};

export default Input;

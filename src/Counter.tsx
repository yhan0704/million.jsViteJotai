import { atom, useAtom } from 'jotai';

const counter = atom(0)
const Counter = () => {
    const [count, setCount] = useAtom(counter)

    const increaseCount = () => setCount(count + 1)
    return (
        <>
            <button onClick={increaseCount}>Incrase</button>
        </>
    )
};

export default Counter;

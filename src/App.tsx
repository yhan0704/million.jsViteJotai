import { atom, useAtom } from 'jotai';
import { useState } from 'react';
import { ImmerTest } from './ImmerTest';
import ShoppingCart from './ShoppingCart';

const textAtom = atom('readonly atoms')
export const uppercase = atom((get) => get(textAtom))

export default function Page() {
  const [lowecaseText, setLowercaseText] = useAtom(textAtom);
  const [uppercaseText] = useAtom(uppercase);

  console.log('h3', lowecaseText)
  console.log('h4', uppercaseText)

  const handleClick = (e: any) => {
    const inputText = e.target.value;

    // 정규식을 사용하여 소문자, 숫자, 대문자로 시작하는 경우를 막음
    if (/^[a-z]+$/.test(inputText)) {
      setLowercaseText(inputText);
    }
  }

  return (
    <div className="app">
      <input value={lowecaseText} onChange={handleClick} />
      <h1>{uppercaseText}</h1>
      {/* <Page1 /> */}
      <ShoppingCart />
    </div>
  )
}

function Page1() {
  const [lowecaseText, setLowercaseText] = useState('');
  const [uppercaseText] = useAtom(uppercase);

  console.log('h1', uppercaseText)
  console.log('h2', lowecaseText)

  const handleClick = (e: any) => {
    const inputText = e.target.value;

    // 정규식을 사용하여 소문자, 숫자, 대문자로 시작하는 경우를 막음
    if (/^[a-z]+$/.test(inputText)) {
      setLowercaseText(inputText);
    }
  }

  return (
    <div className="app">
      <input value={lowecaseText} onChange={handleClick} />
      <h1>{uppercaseText}</h1>
      <h1>{lowecaseText.toUpperCase()}</h1>
    </div>
  )
}

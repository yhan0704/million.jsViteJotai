import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';

const themeAtom = atomWithStorage('dark', false);

export default function App() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);

  const handleClick = () => {
    setAppTheme(!appTheme);
    // Set expiration time to 10 seconds (10000 milliseconds)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Remove 'dark' key from localStorage after 10 seconds
      localStorage.removeItem('dark');
    }, 5000);

    // Clear the timer when the component unmounts or when the theme changes
    return () => clearTimeout(timer);
  }, [appTheme]);

  return (
    <div style={appTheme ? { backgroundColor: 'grey' } : { backgroundColor: 'black' }} className={appTheme ? 'dark' : 'light'}>
      <h1>This is a theme switcher</h1>
      <button onClick={handleClick}>{appTheme ? 'DARK' : 'LIGHT'}</button>
    </div>
  );
}

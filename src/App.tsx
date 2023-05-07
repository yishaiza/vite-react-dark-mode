import { FC, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './contexts/theme-context'
// import Header from './layout/header.tsx';
import Layout from './layout';

import moon from './images/moon.png';
import sun from './images/sun.png';

const App: FC = () => {
  // Detecting the default theme
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  // console.log({ "window.matchMedia('(prefers-color-scheme: dark)')": window.matchMedia('(prefers-color-scheme: dark)') })
  // console.log({ isBrowserDefaulDark: isBrowserDefaulDark() })
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());


  const [count, setCount] = useState(0)
  // const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout>
          <div className="content-wrapper">
            <img src={theme === 'dark' ? moon : sun} alt={theme === 'dark' ? 'moon' : 'sun'} />
          </div>
        </Layout>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo"/>
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo"/>
          </a>
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </ThemeContext.Provider>


  )
}

export default App


// <ThemeContext.Provider value={{ theme, setTheme }}>
//   <div className={`theme-${theme}`}>
//     <Header/>
//
//     {/*<Layout>*/}
//
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.tsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//     {/*</Layout>*/}
//   </div>
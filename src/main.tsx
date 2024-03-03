import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import ExLodash from './exLodash/ExLodash.tsx'
// import ControllableStates from './ControllableStates.tsx'
// import FuzzySearch from './FuzzySearch.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExLodash />
  </React.StrictMode>,
)

import React from 'react'
import './App.css'
import FetchApiFromJson from './FetchApiFromJson'
import FetchApiFromOnline from './FetchApiFromOnline'

function App() {
  return (
    <>
      <FetchApiFromJson /><br />
      <FetchApiFromOnline />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/> }/>
          {/* <Route path="about" element={<About/>}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default App

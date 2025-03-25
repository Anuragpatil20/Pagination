import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagination from './Component/Pagination'

function App() {
  return (
    <Routes>
       <Route path='' element = {<Pagination/>}/>
    </Routes>
  )
}

export default App
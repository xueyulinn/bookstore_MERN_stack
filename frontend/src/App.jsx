import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import CreateBooksPage from './pages/createBooksPage.jsx'
import DeleteBooksPage from './pages/deleteBooksPage.jsx'
import EditBooksPage from './pages/editBooksPage.jsx'
import GetBooksPage from './pages/getBooksPage.jsx'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/books/create' element={<CreateBooksPage />}></Route>
      <Route path='/books/delete/:id' element={<DeleteBooksPage />} ></Route>
      <Route path='/books/edit/:id' element={<EditBooksPage />}></Route>
      <Route path='/books/details/:id' element={<GetBooksPage />}></Route>
    </Routes>
  )
}

export default App
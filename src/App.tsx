import React, { FC } from 'react';
import './styles.css';
import { Route, Routes } from 'react-router-dom';
import { BooksPage } from './pages/BooksPage';
import { Navbar } from './components/Navbar/Navbar';
import { UsersPage } from './pages/UsersPage';
import { TodosPage } from './pages/TodosPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: FC = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/books' element={<BooksPage />}/>
        <Route path='/users' element={<UsersPage />}/>
        <Route path='/todos' element={<TodosPage />}/>
      </Routes>
    </>
  )
};
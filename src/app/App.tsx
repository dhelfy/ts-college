import React, { FC } from 'react';
import './styles.css';
import { Route, Routes } from 'react-router-dom';
import { BooksPage } from '../pages/books/BooksPage';
import { Navbar } from '../shared/ui/Navbar/Navbar';
import { UsersPage } from '../pages/users/UsersPage';
import { TodosPage } from '../pages/todos/TodosPage';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';

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
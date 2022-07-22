import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import TicTacToe from './routes/tictactoe/TicTacToe';
import Todolist from './routes/todolist/Todolist';
import PasswordGenerator from './routes/password-generator/PasswordGenerator'
import { Home } from './routes/home/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="todolist" element={<Todolist />} />
          <Route path="password-generator" element={<PasswordGenerator />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
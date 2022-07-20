import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TicTacToe } from './routes/TicTacToe';
import { Todolist } from './routes/TodoList';
import { PasswordGenerator } from './routes/PasswordGenerator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
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
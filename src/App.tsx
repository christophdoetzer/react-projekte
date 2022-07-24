import { Outlet } from 'react-router-dom'

import './App.css';

import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

interface informations {
  title: string,
  author: string,
  year: number,
}

function App() {
  const informations: informations = {
    title: 'React Projekte',
    author: 'Christoph Dötzer',
    year: new Date().getFullYear()
  }

  return (
    <div className="app">
      <Navbar title={informations.title} />
      <Outlet />
      <Footer author={informations.author} year={informations.year.toString()} />
    </div>
  );
}

export default App;
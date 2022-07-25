import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import './Navbar.css'

interface Props {
  title: string,
}

export const Navbar: React.FC<Props> = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  let isOnTicTacToe = false;
  if (useLocation().pathname === '/tictactoe/settings') {
    isOnTicTacToe = true;
  }
  if (useLocation().pathname === '/tictactoe/field') {
    isOnTicTacToe = true;
  }

  return (
    <nav>
      <Link to="/home" className="logo">
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='React Logo'></img>

        {width > 600 && <h1>{props.title}</h1>}
      </Link>
      <div className='links'>
        <Link to="/todolist" className={useLocation().pathname === '/todolist' ? 'gold' : ''}>Todo Liste</Link>
        <Link to="/password-generator" className={useLocation().pathname === '/password-generator' ? 'gold' : ''} >Passwort Generator</Link>
        <Link to="/tictactoe/settings" className={isOnTicTacToe ? 'gold' : ''}>Tic Tac Toe</Link>
      </div>
    </nav>
  )
}
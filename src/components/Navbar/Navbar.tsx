import { useLocation, Link } from 'react-router-dom'
import './Navbar.css'

interface Props {
  title: string,
}

export const Navbar: React.FC<Props> = (props) => {

  return (
    <nav>
      <Link to="/home" className="logo">
        <img src='logo.png' alt='React logo'></img>
        <h1>{props.title}</h1>
      </Link>
      <div className='links'>
        <Link to="/todolist" className={useLocation().pathname === '/todolist' ? 'gold' : ''}>Todo List</Link>
        <Link to="/password-generator" className={useLocation().pathname === '/password-generator' ? 'gold' : ''} >Password Generator</Link>
        <Link to="/tictactoe" className={useLocation().pathname === '/tictactoe' ? 'gold' : ''}>Tic Tac Toe</Link>
      </div>
    </nav>
  )
}
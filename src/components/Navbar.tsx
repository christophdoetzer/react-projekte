import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
     <div className="navbar">
      This is a test.
      <nav>
        <Link to="/todolist">Todo List</Link>  |{" "}
        <Link to="/password-generator">Password Generator</Link>  |{" "}
        <Link to="/tictactoe">Tic Tac Toe</Link>  |{" "}
      </nav>

     </div>
  )
}
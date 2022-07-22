import { Link } from 'react-router-dom';
import './home.css';
interface Props {

}

export const Home: React.FC<Props> = () => {

    return (
        <div className="home">
            <img className="home-image" src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Projects stock photo"></img>
            <div className="home-text">
                <h2>React.js Projekte</h2>
                <p>Auf dieser website möchte ich meine bisherigen React.js Projekte vorstellen.</p>
                <Link to="/todolist" className='todolist'>Los geht's</Link>
            </div>
        </div>
    );
}
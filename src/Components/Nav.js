import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="navContainer">
            <div className="Logo">
                <p>My Life</p>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Blog">Blog</Link>
            </nav>
        </div>
        );
}
 
   export default Nav;

import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar=()=>{

    return(
        <nav>
            <Link to="/communication" className="navlink">Home</Link>
            <Link to="/info" className="navlink">What is this about?</Link>
        </nav>
    )
};

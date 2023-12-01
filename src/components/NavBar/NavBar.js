import { NavLink } from "react-router-dom";
import './NavBar.css';

export const NavBar=()=>{

    return(
        <header>
            <h1>Non-Violent Communication Practice Tool</h1>
            <nav>
                <NavLink to="/info" className="navlink" activeClassName="active">Introduction</NavLink>
                <NavLink to="/communication" className="navlink" activeClassName="active">Feelings and Needs Cards</NavLink>
            </nav>

            {/* <nav>
                <NavLink to="/info" className="navlink" activeClassName="active">Introduction</NavLink>
                <NavLink to="/communication" className="navlink" activeClassName="active">Feelings and Needs Cards</NavLink>
            </nav> */}
        </header>
    )
};

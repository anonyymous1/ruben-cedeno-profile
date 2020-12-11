import { Link } from 'react-router-dom'

function Nav(){
    return(
        <div className="container-fluid">
        <ul className="navbar-nav">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
            <li className="nav-item"><Link to="/weather">Weather</Link></li>
            <li className="nav-item"><Link to="/Github">Github</Link></li>
        </ul>
        </div>
    )
}

export default Nav;
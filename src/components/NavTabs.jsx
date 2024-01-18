import { Link } from 'react-router-dom';

function NavTabs() {

    return (
        <header className="flex flex-wrap justify-center">         
            <div className="heading">
                <a href="/About" className="text-4xl sm:text-5xl">Hybee's Portfolio</a>
            </div>                     
            <div className="navtab">                
                <Link to="/About" className="nav-item">
                    <div>About</div>
                </Link>
                <Link to="/Portfolio" className="nav-item">
                    <div>Portfolio</div>
                </Link>
                <Link to="/Contact" className="nav-item">
                    <div>Contact </div>
                </Link>
                <Link to="/Resume" className="nav-item">
                    <div>Resume </div>
                </Link>
            </div>                    
        </header>
    );
}

export default NavTabs;

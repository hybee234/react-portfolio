/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {

    // Determines current path allows link to conditionally apply className
    const currentPage = useLocation().pathname;

    return (
        <header className="flex flex-wrap justify-center">         
            <div className="heading">
                <a href="/" className="text-4xl sm:text-5xl">Hybee's Portfolio</a>
            </div>                     
            <div className="navtab">                
                <Link to="/" className={currentPage === '/' ? 'nav-item nav-active' : 'nav-item'}>
                    <div>About Me</div>
                </Link>
                <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-item nav-active' : 'nav-item'}>
                    <div>Portfolio</div>
                </Link>
                <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-item nav-active' : 'nav-item'}>
                    <div>Contact </div>
                </Link>
                <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-item nav-active' : 'nav-item'}>
                    <div>Resume </div>
                </Link>
            </div>                    
        </header>
    );
}

export default NavTabs;

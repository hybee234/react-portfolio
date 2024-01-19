/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation } from 'react-router-dom';
import logo from '/assets/images/Logo.png'

function NavTabs() {

    // Determines current path allows link to conditionally apply className
    const currentPage = useLocation().pathname;

    return (
        <header className="flex flex-wrap">         
            <div className="flex flex-wrap heading">
                <Link to="/" className="text-4xl sm:text-5xl flex"><img className = "logo" width="125" src={logo}></img> </Link>
            </div>                     
            <div className="navtab">
                <div className="bg-filter flex flex-wrap">                
                    <Link to="/" className={currentPage === '/' ? 'nav-item nav-active' : 'nav-item'}>
                        <p>About Me</p>
                    </Link>
                    <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-item nav-active' : 'nav-item'}>
                        <p>Portfolio</p>
                    </Link>
                    <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-item nav-active' : 'nav-item'}>
                        <p>Contact </p>
                    </Link>
                    <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-item nav-active' : 'nav-item'}>
                        <p>Resume </p>
                    </Link>
                </div>
            </div>                    
        </header>
    );
}

export default NavTabs;

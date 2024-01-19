import { Link } from 'react-router-dom';
import githublogo from './../assets/images/github logo.png'

function Footer() {
    return (
        <div className = "footer">
            <div className = "bg-filter">
                <p>Last updated 19/1/2024</p>
                <div>
                    <Link className="border-2" to="https://github.com/hybee234"><img width="30" src={githublogo}></img></Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;

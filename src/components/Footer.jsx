import { Link } from 'react-router-dom';
import githublogo from './../assets/images/github logo.png'
import xlogo from './../assets/images/x logo.png'
import linkedinlogo from './../assets/images/linkedIn logo.png'

function Footer() {
    return (
        <div className = "footer">
            
            <div className = "bg-filter" >
                <p>Last updated 19/1/2024</p>
                <div className="flex justify-center">
                    <span>
                        <div className="p-3">
                            <Link to="https://twitter.com/hklim5"  target="_blank">
                                <img width="40" src={xlogo}></img>   
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className="p-3" >
                            <Link to="https://github.com/hybee234" target="_blank">
                                <img width="40"  src={githublogo}></img>
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className="p-3" >
                            <Link to="https://www.linkedin.com/in/hy-l-25020953/" target="_blank">
                                <img width="55"  src={linkedinlogo}></img>
                            </Link>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;

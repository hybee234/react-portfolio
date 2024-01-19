import { Link } from 'react-router-dom';
import githublogo from '/assets/images/githublogo.png'
import xlogo from '/assets/images/xlogo.png'
import linkedinlogo from '/assets/images/linkedInlogo.png'

import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <div className = "footer">
            <div className = "bg-filter" >
                <p>Last updated 19/1/2024</p>
                <div className="flex justify-center text-5xl">
                    <span>
                        <div className="p-3 link">
                            <Link to="https://twitter.com/hklim5" target="_blank">
                                <FaSquareXTwitter />
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className="p-3 link" >
                            <Link to="https://github.com/hybee234" target="_blank">
                                <FaGithub />
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className="p-3 link" >
                            <Link to="https://www.linkedin.com/in/hy-l-25020953/" target="_blank">
                                <FaLinkedin />
                            </Link>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;

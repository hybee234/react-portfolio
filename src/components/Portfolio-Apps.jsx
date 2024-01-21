import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Applications(props) {
    const { apps } = props    
    
    return (
        <div className="apps-container">
            {
                //Iterate through apps to create cards for applications
                apps.map((apps) => {
                    return (
                        <div className="apps-item justify-center bg-filter" key={apps.id}>
                            <h2>{apps.title}</h2>
                            <p>{apps.description}</p>
                            <div className="p-3">
                                {/* {Conditionally include hyperlink to live demo} */}
                                {
                                    apps.link_deploy ?
                                    ( 
                                        <div>
                                            <Link to={apps.link_deploy} target="_blank">
                                                <img src={apps.image} className="link-img"></img>  
                                            </Link>
                                        </div>
                                    ) : (
                                        <div>
                                            <img src={apps.image} className="link-img"></img>
                                        </div>
                                    )                            
                                }
                            </div>                            
                            <p>{apps.comment1}</p>
                            <p>{apps.comment2}</p>
                            <p>{apps.technologies}</p>
                            <div className="p-3 flex justify-center">
                                {
                                    apps.link_github ?
                                    (
                                        <Link className="link p-3 text-4xl" to={apps.link_github} target="_blank">
                                            <FaGithub />
                                            {/* <img className="link" width="30" src={githublogo}></img> */}
                                        </Link>
                                    ) : (
                                        
                                        <p className="no-link flex p-3 text-2xl">Private Repo&nbsp;<FaGithub className="text-4xl"/></p>
                                    )
                                }
                                {/* {Conditionally include hyperlink to live demo} */}
                                {
                                    apps.link_deploy ?
                                    ( 
                                        <Link className="link p-3 text-2xl" to={apps.link_deploy} target="_blank"> Visit Website </Link>
                                    ) : ( 
                                        <p className="no-link p-3 text-2xl">Live website unavailable</p>
                                    )                            
                                }
                            </div>
                        </div>
                    )
                }) 
            }        
        </div>
    )
}
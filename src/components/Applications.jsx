
import { Link } from 'react-router-dom';
import githublogo from '/assets/images/githublogo.png'

export default function Applications(props) {

    const { apps } = props 
    console.log ("apps", apps)

    
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
                                <div>
                                    <Link className="" to={apps.link_deploy} target="_blank">
                                        <img src={apps.image}></img>  
                                    </Link>
                                </div>
                            </div>                            
                            <p>{apps.technologies}</p>
                            <div className="p-3 flex justify-center">
                                <Link className="p-3" to={apps.link_github} target="_blank">
                                    <img className="portfolio-image" width="30" src={githublogo}></img>
                                </Link>
                                <Link className="p-3" to={apps.link_deploy} target="_blank"> Visit Website </Link>
                            </div>

                        </div>
                    )
                }) 
            }        
        </div>
    
    )


}
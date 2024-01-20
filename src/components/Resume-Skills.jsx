import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Skills(props) {

    const {skills} = props

    return (                        
        <div className = "m-auto mt-10">
            {
                skills.map( (skills) => {
                    return (
                        <div className = "bg-filter m-2" key={skills.id}>
                            <h2>{skills.type}</h2>                            
                            <div className="flex flex-wrap justify-center">                                        
                                {
                                    skills.skill.map( (skill) => {
                                        return (
                                            // Check if white background is used
                                            skill.background ?
                                            (
                                                <div className="skill-card" key={skill.id}>
                                                    <Link to={skill.url} target="_blank">
                                                        <Icon icon={skill.iconify_component} className="skill-icon skill-bg m-auto" />                                                        
                                                    </Link>
                                                    <p className="skill-text">{skill.title}</p>
                                                </div>
                                            ) : (
                                                <div className="skill-card" key={skill.id}>
                                                    <Link to={skill.url} target="_blank">
                                                        <Icon icon={skill.iconify_component} className="skill-icon m-auto" />
                                                        {/* Check if img is used instead of iconify */}
                                                        {
                                                            skill.img ?
                                                            (
                                                            <img src={skill.img} className="skill-icon m-auto"></img>
                                                            ) : (
                                                            <span></span>
                                                            )
                                                        }
                                                    </Link>
                                                    <p className="skill-text">{skill.title}</p>
                                                </div>
                                            )
                                        )
                                    })                                        
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
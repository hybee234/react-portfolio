import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Skills(props) {

    const {skills} = props

    return (                        
        <div className = "bg-filter resume-page m-auto mt-10">
            {
                skills.map( (skills) => {
                    return (
                        <div key={skills.id}>
                            <h2 >{skills.type}</h2>
                            <div className="flex justify-center">                                        
                                {
                                    skills.skill.map( (skill) => {
                                        return (
                                            // Check if white background is used
                                            skill.background ?
                                            (
                                                <div className="p-5" key={skill.id}>
                                                    <Link to={skill.url} target="_blank">
                                                        <Icon icon={skill.iconify_component} className="skill-icon skill-bg" />                                                        
                                                    </Link>
                                                    <p>{skill.title}</p>
                                                </div>
                                            ) : (
                                                <div className="p-5" key={skill.id}>
                                                    <Link to={skill.url} target="_blank">
                                                        <Icon icon={skill.iconify_component} className="skill-icon" />
                                                        {/* Check if img is used instead of iconify */}
                                                        {
                                                            skill.img ?
                                                            (
                                                            <img src={skill.img} className="skill-icon"></img>
                                                            ) : (
                                                            <span></span>
                                                            )
                                                        }
                                                    </Link>
                                                    <p>{skill.title}</p>
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
import { Icon } from '@iconify/react';

export default function Resume() {
const skills = [
    {
        type: "frontend",
        skill: [
            {
                iconfy_component: "devicon:html5",
                url: "https://html.com/html5/",
                title: "HTML",
                background: "none"
            },
        ],
    },
    {
        type: "backend",
        skill: [
            {
                iconfy_icon: "",
                url: "",
                title: "node",
            },
        ],
    },
]

    return (
        <div className="page">
            <div className="page-header bg-filter ">
                <h1>Resume</h1>
            </div>
                        
            <div className = "bg-filter resume-page m-auto mt-10">



                <div>
                    <h2>Front end</h2>

                    <div className="flex justify-center">
                        <div className="p-5">
                            <Icon icon="devicon:html5" width="100" height="100" />
                            <p>HTML</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="logos:javascript" width="100" height="100"/>
                            <p>Javascript</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="skill-icons:css" width="100" height="100"/>
                            <p>CSS</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="devicon:tailwindcss" width="100" height="100"/>
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="devicon:bootstrap-wordmark" width="100" height="100"/>
                            <p>Bootstrap CSS</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="logos:react" width="100" height="100"/>
                            <p>React</p>
                        </div>
                    </div>

                    <h2>Back end</h2>

                    <div className="flex justify-center">
                        <div className="p-5">
                            <Icon icon="logos:nodejs-icon" width="100" height="100"/>
                            <p>Node.JS</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="devicon:express-wordmark" width="100" height="100" className="bg-white"/>
                            <p>Express.JS</p>
                        </div>
                    </div>

                    <h2>Databases</h2>
                    
                    <div className="flex justify-center">
                        <div className="p-5">
                            <Icon icon="logos:mysql" width="100" height="100"/>
                            <p>MySQL</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="devicon:sequelize" width="100" height="100"/>
                            <p>Sequelize</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="logos:mongodb-icon" width="100" height="100"/>
                            <p>MongoDB</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="devicon:mongoose-wordmark" width="100" height="100"/>
                            <p>MongoDB</p>
                        </div>
                    </div>

                    <h2>Other</h2>
                    
                    <div className="flex justify-center">
                        <div className="p-5">
                            <Icon icon="logos:nodemon" width="100" height="100"/>
                            <p>Nodemon</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="devicon:webpack" width="100" height="100"/>
                            <p>Webpack</p>
                        </div>
                        <div className="p-5">
                            <Icon icon="logos:vitejs" width="100" height="100"/>
                            <p>Vite</p>
                        </div>
                    </div>

                </div>
                
                
        
            </div>
        </div>
    );
}

import Skills from './../components/Resume-Skills'
import ResumeDownload from './../components/Resume-download'

export default function Resume() {

    const skills = [
        {
            id: "1",
            type: "Frontend",
            skill: [
                {                    
                    id: "1",
                    iconify_component: "devicon:html5",
                    url: "https://html.com/html5/",
                    title: "HTML",
                },
                {                    
                    id: "2",
                    iconify_component: "logos:javascript",
                    url: "https://www.javascript.com/",
                    title: "Javascript",
                },
                {                    
                    id: "3",
                    iconify_component: "skill-icons:css",
                    url: "https://www.w3.org/Style/CSS/Overview.en.html",
                    title: "CSS",
                },
                {                    
                    id: "4",
                    iconify_component: "devicon:tailwindcss",
                    url: "https://tailwindcss.com/",
                    title: "Tailwind CSS",
                },
                {                    
                    id: "5",
                    iconify_component: "devicon:bootstrap-wordmark",
                    url: "https://getbootstrap.com/",
                    title: "Bootstrap",
                },
                {                    
                    id: "6",
                    iconify_component: "logos:react",
                    url: "https://react.dev/",
                    title: "React",
                },
            ],
        },
        {
            id: "2",
            type: "Backend",
            skill: [
                {                    
                    id: "1",
                    iconify_component: "logos:nodejs-icon",
                    url: "https://nodejs.org/en",
                    title: "Node.JS",
                },
                {                    
                    id: "2",
                    iconify_component: "devicon:express-wordmark",
                    url: "https://html.com/html5/",
                    title: "Express",
                    background: "white"
                },
                {                    
                    id: "3",
                    img: "/assets/images/inquirer.svg",
                    url: "https://www.npmjs.com/package/inquirer",
                    title: "Inquirer",
                },
                {                    
                    id: "4",
                    img: "/assets/images/bcrypt.png",
                    url: "https://www.npmjs.com/package/bcrypt",
                    title: "BCrypt",
                },
                {
                    id: "5",
                    iconify_component: "logos:mysql",
                    url: "https://www.mysql.com/",
                    title: "MySQL",
                },
                {
                    id: "6",
                    iconify_component: "devicon:sequelize",
                    url: "https://sequelize.org/docs/v6/core-concepts/model-querying-basics/",
                    title: "Seqeulize",
                },
                {
                    id: "7",
                    iconify_component: "devicon:mongodb-wordmark",
                    url: "https://sequelize.org/docs/v6/core-concepts/model-querying-basics/",
                    title: "MongoDB",
                    background: "yes",
                },
                {
                    id: "8",
                    iconify_component: "devicon:mongoose-wordmark",
                    url: "https://mongoosejs.com/",
                    title: "Mongoose",
                },
                {
                    id: "9",
                    iconify_component: "logos:graphql",
                    url: "https://graphql.org/",
                    title: "GraphQL",
                },
                {
                    id: "10",
                    img: "/assets/images/serve.png",
                    url: "https://www.npmjs.com/package/serve",
                    title: "Serve",
                },
                {
                    id: "11",
                    img: "/assets/images/nodemailer.png",
                    url: "https://nodemailer.com/",
                    title: "Nodemailer",
                },
            ],
        },
        {
            id: "4",
            type: "Other",
            skill: [
                {
                    id: "1",
                    iconify_component: "devicon:webpack",
                    url: "https://webpack.js.org/",
                    title: "Webpack",
                },
                {
                    id: "2",
                    iconify_component: "logos:nodemon",
                    url: "https://www.npmjs.com/package/nodemon",
                    title: "Nodemon",
                },

                {
                    id: "3",
                    iconify_component: "logos:vitejs",
                    url: "https://vitejs.dev//",
                    title: "Vite",
                },
                {
                    id: "4",
                    iconify_component: "logos:jest",
                    url: "https://jestjs.io/",
                    title: "Jest",
                },
            ],
        },        
    ]


    return (
        
        <div className="page">
            <div className="page-header bg-filter ">
                <h1 className="m-auto">Skills</h1>
            </div>
            <ResumeDownload />
            <Skills skills={skills}/>
        </div>
    )
}

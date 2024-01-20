import Skills from './../components/Resume-Skills'

export default function Resume() {

    const skills = [
        {
            id: "1",
            type: "Frontend",
            skill: [
                {                    
                    id: "10",
                    iconify_component: "devicon:html5",
                    url: "https://html.com/html5/",
                    title: "HTML",
                },
                {                    
                    id: "20",
                    iconify_component: "logos:javascript",
                    url: "https://www.javascript.com/",
                    title: "Javascript",
                },
                {                    
                    id: "30",
                    iconify_component: "skill-icons:css",
                    url: "https://www.w3.org/Style/CSS/Overview.en.html",
                    title: "CSS",
                },
                {                    
                    id: "40",
                    iconify_component: "devicon:tailwindcss",
                    url: "https://tailwindcss.com/",
                    title: "Tailwind CSS",
                },
                {                    
                    id: "50",
                    iconify_component: "devicon:bootstrap-wordmark",
                    url: "https://getbootstrap.com/",
                    title: "Bootstrap CSS",
                },
                {                    
                    id: "60",
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
                    id: "100",
                    iconify_component: "logos:nodejs-icon",
                    url: "https://nodejs.org/en",
                    title: "Node.JS",
                },
                {                    
                    id: "200",
                    iconify_component: "devicon:express-wordmark",
                    url: "https://html.com/html5/",
                    title: "Express.JS",
                    background: "white"
                },
                {                    
                    id: "300",
                    img: "/assets/images/inquirer.svg",
                    url: "https://www.npmjs.com/package/inquirer",
                    title: "Inquirer.js",
                },
                {                    
                    id: "400",
                    img: "/assets/images/bcrypt.png",
                    url: "https://www.npmjs.com/package/bcrypt",
                    title: "BCrypt",
                },
            ],
        },
        {
            id: "3",
            type: "Database",
            skill: [
                {
                    id: "1000",
                    iconify_component: "logos:mysql",
                    url: "https://www.mysql.com/",
                    title: "MySQL",
                },
                {
                    id: "2000",
                    iconify_component: "devicon:sequelize",
                    url: "https://sequelize.org/docs/v6/core-concepts/model-querying-basics/",
                    title: "Seqeulize",
                },
                {
                    id: "3000",
                    iconify_component: "devicon:mongodb-wordmark",
                    url: "https://sequelize.org/docs/v6/core-concepts/model-querying-basics/",
                    title: "MongoDB",
                    background: "yes",
                },
                {
                    id: "4000",
                    iconify_component: "devicon:mongoose-wordmark",
                    url: "https://mongoosejs.com/",
                    title: "Mongoose",
                },
                {
                    id: "5000",
                    iconify_component: "logos:graphql",
                    url: "https://graphql.org/",
                    title: "GraphQL",
                },
            ],
        },
        {
            id: "4",
            type: "Other",
            skill: [
                {
                    id: "10000",
                    iconify_component: "logos:nodemon",
                    url: "https://www.npmjs.com/package/nodemon",
                    title: "Nodemon",
                },
                {
                    id: "20000",
                    iconify_component: "devicon:webpack",
                    url: "https://webpack.js.org/",
                    title: "Webpack",
                },
                {
                    id: "30000",
                    iconify_component: "logos:vitejs",
                    url: "https://vitejs.dev//",
                    title: "Vite",
                },
                {
                    id: "40000",
                    iconify_component: "logos:jest",
                    url: "https://jestjs.io/",
                    title: "Jest",
                },
                {
                    id: "50000",
                    img: "/assets/images/nodemailer.png",
                    url: "https://nodemailer.com/",
                    title: "Nodemailer",
                },
                {
                    id: "60000",
                    img: "/assets/images/serve.png",
                    url: "https://www.npmjs.com/package/serve",
                    title: "Serve",
                },
            ],
        },        
    ]


    return (
        
        <div className="page">
            <div className="page-header bg-filter ">
                <h1>Resume</h1>
            </div>                        
            <Skills skills={skills}/>
        </div>
    )
}

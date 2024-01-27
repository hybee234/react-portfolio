
import Applications from "./../components/Portfolio-Apps";

export default function Portfolio() {

// Set up apps constant to pass through to Applications as props
/*
    Example entry
    {
        id: 1,
        title: "Book Search Engine",
        description: "A basic MERN stack application",
        image: "/assets/images/MERN.png",
        //comment1: 
        //comment2: 
        technologies: "MongoDB, Mongoose, React, Express.JS, GraphQL, Auth(JWT), Deployed on Heroku",
        link_deploy: "https://hybee-book-search-engine-e306e54d030c.herokuapp.com/",        // Remove if not deployed
        link_github: "https://github.com/hybee234/book-search-engine",                          // Remove if GitHub repository is private
    },
*/
const apps = [
    {
        id: 1,
        title: "My Wine Cellar",
        description: "An online cellar inventory management solution",
        image: "/assets/images/mywinecellar.png",
        comment1: `User: admin@email.com Pass: 12345678`,
        comment2: `User: user@email.com Pass: 12345678`,
        technologies: "MySQL, Sequelize, Express.JS, Handlebars, JawsDB, Tailwind CSS, Deployed on Heroku",
        link_deploy: "https://my-wine-cellar-non-prod-828d22547558.herokuapp.com/login",
        // link_github: "https://github.com/hybee234/my-wine-cellar",
    },
    {
        id: 2,
        title: "Social Network Server",
        description: "A MongoDB/Mongoose server ready to serve a social network front end",
        image: "/assets/images/socialnetwork.png",
        technologies: "MongoDB, Mongoose, Express.JS",
        link_github: "https://github.com/hybee234/social-network-server",
    },
    {
        id: 3,
        title: "Huber's Weather Dashboard",
        description: "A 5 day forecast weather dashboard utilising openweather API",
        image: "/assets/images/weatherdashboard.png",
        technologies: "Javascript, Tailwind CSS Framework, FontAwesome, OpenWeather API, DayJS",
        link_deploy: "https://hybee234.github.io/weather-dashboard/",
        link_github: "https://github.com/hybee234/weather-dashboard",
    },
    {
        id: 4,
        title: "Book Search Engine",
        description: "A basic MERN stack application",
        image: "/assets/images/MERN.png",
        //comment1: 
        //comment2: 
        technologies: "MongoDB, Mongoose, React, Express.JS, GraphQL, Auth(JWT), Deployed on Heroku",
        link_deploy: "https://hybee-book-search-engine-e306e54d030c.herokuapp.com/",        // Remove if not deployed
        link_github: "https://github.com/hybee234/book-search-engine",                          // Remove if GitHub repository is private
    },
    {
        id: 5,
        title: "Just Another Text Editor",
        description: "A text editor that is a progressive web application ",
        image: "/assets/images/jate.png",
        technologies: "Node.js, Express, Webpack, Heroku",
        link_deploy: "https://hybee-text-editor-d4b54d9f343e.herokuapp.com/",
        link_github: "https://github.com/hybee234/text-editor",
    },
    {
        id: 6,
        title: "Javascript Quiz Game",
        description: "A quiz game about Javascript, written in Javascript",
        image: "/assets/images/javascriptquizgame.png",
        technologies: "Javascript",
        link_deploy: "https://hybee234.github.io/quiz-game/",
        link_github: "https://github.com/hybee234/quiz-game",
    },
]

    return (
        
        <div>
            <div className="page">
                <div className="page-header bg-filter">
                    <h1>Portfolio </h1>
                </div>
            </div>
            <div className="mt-5">
                <Applications apps={apps} />                
            </div>
            </div>
        );
}

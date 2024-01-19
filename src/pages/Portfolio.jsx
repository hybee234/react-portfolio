
import Applications from "./../components/Applications";

export default function Portfolio() {

// Set up apps constant to pass through to Applications as props
const apps = [
    {
        id: 1,
        title: "My Wine Cellar",
        description: "An online cellar inventory management solution",
        image: "/assets/images/mywinecellar.png",
        technologies: "MySQL, Sequelize, Express.Js, Handlebars.js, JawsDS, Tailwind CSS, Deployed on Heroku (Private)",
        link_deploy: "https://hybee-my-wine-cellar-5b9958ea6eee.herokuapp.com/login",
        link_github: "https://github.com/hybee234/my-wine-cellar",
    },
    {
        id: 2,
        title: "Social Network Server",
        description: "A MongoDB server ready to serve a social network front end",
        image: "/assets/images/socialnetwork.png",
        technologies: "MongoDB, Mongoose, Express.Js, Node.js",
        link_deploy: "",
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
        title: "Huber's Tech Blog",
        description: "A tech blog forum to share and comment on the latest technology",
        image: "/assets/images/techblog.png",
        technologies: "MySQL, Express, BCrypt, Dotenv, Tailwind CSS",
        link_deploy: "https://huber-tech-blog-ed7fd58460b2.herokuapp.com/",
        link_github: "https://github.com/hybee234/tech-blog",
    },
    {
        id: 5,
        title: "Just Another Text Editor",
        description: "Just another text editor, a progressive web application",
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
                <div className="page bg-filter">
                    <h1>Portfolio </h1>
                </div>
                <Applications apps={apps} />                
            </div>
        );
}

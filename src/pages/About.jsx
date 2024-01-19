import picture from '/assets/images/Profile.jpg'

export default function About() {
    return (
        <div className="page">
            <div className="page-header bg-filter">
                <h1>About Me</h1>
            </div>
            
            <div className = "bg-filter flex flex-wrap justify-center align-center mt-20">
                <h1 className="w-1/2">Hello! I'm Hy </h1>
                <h1>Welcome to my portfolio!</h1> 
                <div className = "p-5 m-5">
                    <img className = "m-auto" src={picture} width="300px"></img>
                </div>
                <div className = "p-5 m-5">
                    <p>
                        Thanks for dropping by 
                        Enthusiastic, budding developer who has just gone through an intense 6 month bootcamp! 
                        Who you are and what you're droppingHow you got here
                        Where are you looking to go next
                    </p>
                </div>
            </div>
        </div>
    );
}

import picture from '/assets/images/Profile.jpg'

export default function About() {
    return (
        <div className="page">
            <div className="page-header bg-filter">
                <h1>About Me</h1>
            </div>
            
            <div className = "bg-filter justify-center align-center mt-10">
                <h2 className="w-full">Hello! I'm Hy </h2>
                <h2 className="w-full">Welcome to my portfolio!</h2> 
                <div className ="flex flexwrap">
                    <div className = "p-2 m-2 min-w-96 border-2">
                        <img src={picture} width="500px" className="m-auto"></img>
                    </div>
                    <div className = "p-2 m-2 border-2">
                        <p>
                            Thanks for dropping by 
                            Enthusiastic, budding developer who has just gone through an intense 6 month bootcamp! 
                            
                            Who you are and what you're dring
                            How you got here
                            Where are you looking to go next
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

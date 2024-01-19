import picture from './../assets/images/Profile.jpg'

export default function About() {
    return (
        <div className="page bg-filter">
            <h1>Hello! I'm Hy </h1>
                <h1>Welcome to my portfolio!</h1> 
            <div className = "flex flex-wrap justify-center align-center">
                <div className = "border-2 p-2">
                    <img className = "m-auto" src={picture} width="300px"></img>
                </div>
                <div className = "border-2 p-2">
                    <p>
                        Enthusiastic, budding developer who has just gone through an intense 6 month bootcamp! 
                    </p>
                </div>
            </div>
        </div>
    );
}

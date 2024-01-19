import picture from './../assets/images/chiikawa.gif'

export default function About() {
    return (
        <div className="page bg-filter">
            <h1>About Me</h1>
            <div>
                <img className = "m-auto" src={picture}></img>
            </div>
            <p>
                Enthusiastic, budding developer who has just gone through an intense 6 month bootcamp! 
            </p>
        </div>
    );
}

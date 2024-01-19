import ContactForm from "./../components/ContactForm";

export default function Contact() {
    return (
        <div className="page">
        <div className="page-header bg-filter ">
            <h1>Contact Me</h1>
        </div>
        
        <div className = "bg-filter contact-page m-auto mt-10">
            <ContactForm />
        </div>
    </div>
    );
}

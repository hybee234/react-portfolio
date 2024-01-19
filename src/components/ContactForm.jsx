import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value)
        } else if (name === "email") {
            setEmail(value)
        } else if (name === "message") {
            setMessage(value)
        }
    }

    // regexObject.test( String )  returns true or false


    const handleInputBlur = e => {
        const { name, value } = e.target;
        console.log(`${name} lost focus, ${value}`);

        if (name === "name" && !value) {
            console.log ("Name is required")
        } else if (name === "email" && !value) {
            console.log ("Email is required")
        } else if (name === "message" && value.length < 10) {
            console.log ("Message must be at least 10 characters required")
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${name}, your email is ${email} and your message is "${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <div className="border-red-400">
            <h2>
                Complete this contact form:
            </h2>
            <form className="form modal-content m-auto" onSubmit={handleFormSubmit}>
            <div>
                <label className="block my-2 text-xs font-bold tracking-wide modal-text-color uppercase"> Name </label>
                <input
                    className="form-field"
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type="text"
                    placeholder="Name"
                    required
                />
            </div>
            <div>
                <label className="block my-2 text-xs font-bold tracking-wide modal-text-color uppercase"> Email </label>
                <input
                    className="form-field"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div>
                <label className="block my-2 text-xs font-bold tracking-wide modal-text-color uppercase"> Message </label>
                <textarea
                    className="form-field"
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur} 
                    type="textArea"
                    rows="10"
                    placeholder="Type your message here"
                />
            </div>
                <button className="w-28 px-6 py-2 my-2 font-bold button-color" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;

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

    // Blur event (lost focus)
    const handleInputBlur = e => {
        const { name, value } = e.target;
        console.log(`${name} lost focus, ${value}, ${value.length}`);

        // If name field lost focus
        if (name === "name") {
            // If name value is null - show message
            if (!value) {
                console.log ("Name is required")
                document.getElementById('name-required').style.visibility = "visible";
            }
            // If name value is OK - hide message
            if (value) {
                console.log ("Name is OK")
                document.getElementById('name-required').style.visibility = "hidden";
            }

        // If email field lost focus
        } else if (name === "email") {            
            // If email value is null - show message
            if (!value) {
                console.log ("Email is required")
                document.getElementById('email-required').style.visibility = "visible";
            }
            // If email value is OK - hide message - check regex here
            if (value) {
                console.log ("Email is OK")
                document.getElementById('email-required').style.visibility = "hidden";
            }

        // If message field lost focus
        } else if (name === "message") {

            // If message length lt 10 - show message
            if (value.length < 10) {
                console.log ("Message more than 10 chars is required")
                document.getElementById('message-required').style.visibility = "visible";  
            }          
            // If message is OK - hide message
            if (value.length >= 10) {
                console.log ("Message is OK")
                document.getElementById('message-required').style.visibility = "hidden";
            }
            


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
                <p id="name-required" className="required">A name is required</p>
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
                <p id="email-required" className="required">A valid email is required</p>
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
                <p id="message-required" className="required">Message must be more than 10 characters</p>
            </div>
                <button className="w-28 px-6 py-2 my-2 font-bold button-color" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;

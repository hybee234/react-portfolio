import { useState } from 'react';

// Constants to validate form fields
let nameOK;
let emailOK;
let messageOK;
const regex = new RegExp('^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z0-9_.-]+)$')

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //Field updated event
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

    // Blur event (lost focus)
    const handleInputBlur = e => {
        const { name, value } = e.target;
        // console.log(`${name} lost focus, ${value}, ${value.length}`);

        // If name field loses focus
        if (name === "name") {
            // If name value is null - show message
            if (!value) {
                console.log ("Name is required")
                document.getElementById('name-required').style.visibility = "visible";
                nameOK = 0;
            }
            // If name value is OK - hide message
            if (value) {
                console.log ("Name is OK")
                document.getElementById('name-required').style.visibility = "hidden";
                nameOK = 1;
            }

        // If email field loses focus
        } else if (name === "email") {            
            // If email value is null - show message
            if (!value) {
                console.log ("Email is required")
                document.getElementById('email-required').style.visibility = "visible";
                emailOK = 0;
            }
            // If email value is OK - hide message - check regex here
            if (value) {
                console.log ("Email is populated")                
                //Test value against regex
                if (regex.test(value)) {
                    //Hide message if pass regex test
                    console.log ("regex test", regex.test(value))
                    document.getElementById('email-required').style.visibility = "hidden";
                    emailOK = 1;
                } else {
                    //Show message if fail regex text
                    console.log ("regex test", regex.test(value))
                    document.getElementById('email-required').style.visibility = "visible";
                    emailOK = 0;
                }
            }

        // If message field loses focus
        } else if (name === "message") {
            // If message length lt 10 - show message
            if (value.length < 10) {
                console.log ("Message more than 10 chars is required")
                document.getElementById('message-required').style.visibility = "visible";
                messageOK = 0
            }          
            // If message is OK - hide message
            if (value.length >= 10) {
                console.log ("Message is OK")
                document.getElementById('message-required').style.visibility = "hidden";
                messageOK = 1
            }            
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //Check if form is ready to submit
        console.log("nameOK", nameOK, "emailOK", emailOK, "messageOK", messageOK)

        if (nameOK === 1 && emailOK === 1 && messageOK === 1) {
            // Fields are OK
            
            console.log("Fields are OK")
            // document.getElementById('submit-button').disabled = "false"
            document.getElementById('submit-button').classList.remove("button-form-error")
            document.getElementById('submit-button').classList.add("button-color")
            document.getElementById('button-message').style.visibility = "hidden";

            //Insert submit actions here
            alert(`Hello ${name}, your email is ${email} and your message is "${message}`);
            setName('');
            setEmail('');
            setMessage('');

        } else {
            // Fields are not OK 
            
            console.log("Fields not OK")            
            document.getElementById('submit-button').classList.add("button-form-error")
            document.getElementById('submit-button').classList.remove("button-color")
            document.getElementById('button-message').style.visibility = "visible";
        }
    };


    return (
        <div>
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
                    required
                />
                <p id="email-required" className="required">Please enter a email address</p>
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
                    required
                />
                <p id="message-required" className="required">Message must be more than 10 characters</p>
            </div>            
                <button id="submit-button" className="w-28 px-6 py-2 my-2 font-bold button-color" type="submit" >
                    Submit
                </button>
                <p id="button-message" className="required">Please review field values before submitting</p>
            </form>
        </div>
    );
}

export default ContactForm;

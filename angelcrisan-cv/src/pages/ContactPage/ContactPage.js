import emailjs from 'emailjs-com';
import React from 'react';

export default function ContactMe() {

    function sendEmail(e) { 
        e.preventDefault();

        emailjs.sendForm('gmail', 'gmail_template_angel', e.target, 'user_1uoCy7m6nUxXvfrlxFnSf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();

    }

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="email-section">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="submit-btn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


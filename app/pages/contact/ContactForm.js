import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('', '', e.target, '')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    } 

    return (
        <>
            <div className="contact-form">
                <form action="#" method="post" aria-label="Contact form" onSubmit={sendEmail}>
                    <div className="row">
                        <div className="form-group col-6">
                            <input aria-required="true" aria-invalid="false" placeholder="Name" value="" type="text" name="your-name" required />
                        </div>
                        <div className="form-group col-6">
                            <input aria-required="true" aria-invalid="false" placeholder="Email" value="" type="email" name="your-email" required />
                        </div>
                        <div className="form-group col-12">
                            <input aria-invalid="false" placeholder="Title" value="" type="text" name="your-subject" required />
                        </div>
                        <div className="form-group col-12">
                            <textarea aria-invalid="false" placeholder="Message" name="message"></textarea>
                        </div>
                        <div className="ms-cf--bottom">
                            <input className="btn btn--primary" type="submit" value="Send" />
                        </div>
                    </div>
                </form>
            </div> 
        </>
    );
}

export default ContactForm;

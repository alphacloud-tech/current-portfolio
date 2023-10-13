import React, { useState } from 'react'


import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData


    const handleChangeInput = (e) => {
        // console.log("working");
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });

    }

    const handleSubmit = () => {
        // console.log("working");
        setLoading(true)

        // follow sanity guildline to form a contact onject
        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        }

        // once we hv d contact this is d first time dat we r use sanity client
        // to upload data from our app to our sanity

        client.create(contact)
            .then(() => {
                setLoading(false)
                setIsFormSubmitted(true)
            })
    }

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a href="mailto:adesanjo470@gmail.com" className="p-text">adesanjo470@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+(234) 810 791 7605" className="p-text">+(234) 810 791 7605</a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);

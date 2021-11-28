import React, { useEffect, useState } from 'react';
import { StyledContact, StyledContactContainer } from './Contact.styled';
import emailjs from 'emailjs-com';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

interface Props {

}

const Contact: React.FC<Props> = () => {
    const [email, setEmail] = useState<{theirEmail: string, name: string, message: string}>
    ({
        theirEmail: "", 
        name: "", 
        message: ""
    });

    const [sent, setSent] = useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(!email.message.trim() || !email.name.trim() || !email.theirEmail.trim()) {
            alert("Must fill out all fields");
        } else {
            emailjs.sendForm('service_m2ydweq', 'template_8mnzpao', e.target, 'user_QQZyTrKjicwn1pxgTARFC')
                .then((result) => {
                    console.log(result.text);
                    localStorage.setItem("sent", "true");
                    setSent(true);
                    console.log("Sent is now true")
                }, (error) => {
                    console.log(error.text);
                });
                setEmail({
                    theirEmail: "", 
                    name: "", 
                    message: ""
                });
        }
    }

    useEffect(() => {
        if(localStorage.getItem("sent")) {
            setSent(true);
        }
    }, [])

    return (
        <div className="d-flex flex-column">
            {sent ?
                <div className="d-flex flex-column align-items-center px-2" style={{color: "#6f6ffc", background: "black", height: "90vh"}}>
                    <h2 className="mt-4 text-center">Thanks For Reaching Out!</h2>
                    <h6 className="mt-2 text-center">Due to me using a free email service I must limit to 1 email per person.</h6>
                    <div style={{flex: 1}}></div>
                    <div className="w-100 text-white d-flex justify-content-center">
                        <p className="mx-1">Created By Joshua Lamke</p>
                        <div>
                            <a href="https://github.com/JoshuaLamke" className="mx-2" target="_blank" rel="noreferrer">
                                <BsGithub color="white"/>
                            </a>
                            <a href="https://www.linkedin.com/in/joshua-lamke-742166166/" className="mx-2" target="_blank" rel="noreferrer">
                                <BsLinkedin color="white"/>
                            </a>
                        </div>
                    </div>
                </div>
                :
                <StyledContact className="d-flex flex-column align-items-center">
                    <StyledContactContainer>
                        <h2 className="mt-4">Contact Me</h2>
                        <form className="d-flex flex-column w-75" onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input className="form-control" value={email.name} required type="text" onChange={(e) => setEmail({...email, name: e.target.value})} name="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="theirEmail">Email</label>
                                <input type="email" className="form-control" required value={email.theirEmail} onChange={(e) => setEmail({...email, theirEmail: e.target.value})} name="theirEmail" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea rows={4} className="form-control" required value={email.message} onChange={(e) => setEmail({...email, message: e.target.value})} name="message" placeholder="Message"/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn text-white mt-2" style={{background: "#6f6ffc", width: "100px"}}>
                                    SEND
                                </button>
                            </div>
                        </form>
                    </StyledContactContainer>
                    <div style={{flex: 1}}></div>
                    <div className="w-100 text-white d-flex justify-content-center">
                        <p className="mx-1">Created By Joshua Lamke</p>
                        <div>
                            <a href="https://github.com/JoshuaLamke" className="mx-2" target="_blank" rel="noreferrer">
                                <BsGithub color="white"/>
                            </a>
                            <a href="https://www.linkedin.com/in/joshua-lamke-742166166/" className="mx-2" target="_blank" rel="noreferrer">
                                <BsLinkedin color="white"/>
                            </a>
                        </div>
                    </div>
                </StyledContact>
            }
        </div>
    );
}

export default Contact;
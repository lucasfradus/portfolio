import {React,useState} from 'react'
import { contact,  social } from '../../profile'
import NetlifyForm from 'react-netlify-form';
import LoadingSpinner from '../layouts/LoadingSpinner';
const Contact = ({translate}) => {

    const successMessage= translate('Contact-form.messages.success')
    const errorMessage= translate('Contact-form.messages.bad')
    const loadingMessage = translate('Contact-form.messages.loading')
   
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{translate('Contact-form.title')}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
            
                <NetlifyForm name='contact-v1'>
                {({ loading, error, success }) => (
                    <div>
                        {loading &&
                            <div className="alert info">
                                {loadingMessage}
                            </div>
                        }
                        {error &&
                            <div className="alert danger">
                                {errorMessage}            
                            </div>
                        }
                        {success &&
                            <div className="alert success">
                                {successMessage}
                            </div>
                        }
                    <div>
                    <form name='contact-v2'>
                        <input type="text" name="nombre" placeholder="Your name" required></input>
                        <input type="mail" name="mail" placeholder="Email Address" required></input>
                        <input type="text" name="asunto" placeholder="Subject" required></input>
                        <textarea name="mensaje" placeholder="Message" required></textarea>
                    </form>
                   
                    {loading ?
                        <LoadingSpinner translate={translate} /> :
                        <button type="submit"  className='btn'>{translate('Contact-form.buttons.send')}  </button>
                    }

                </div>
                
                </div>
                )}
                </NetlifyForm>

                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                </div>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2021 © Copyright <strong>{contact.copyright}</strong>. Todos los derechos reservados</p>
        </div>
    )
    
}

export default Contact

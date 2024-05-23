import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <>
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Hungry hound App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
             </div>
             <section id="contact-details" className="section-p1">
                    <div className="details">
                        <span>GET IN TOUCH</span>
                        <h2>Visit one of our agency locations or contact us today</h2>
                        <h3><b>Head Office</b></h3>
                        <div>
                            <li>
                                <p>
                                    Chandigarh-Patiala National Highway (NH- 64 Village Jansla,
                                    Rajpura, Punjab 140401
                                </p>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <p>hungryhound@gmail.com</p>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <p>044 4561 4700</p>
                            </li>
                            <li>
                                <i className="far fa-clock"></i>
                                <p>Monday to Sunday: 9:00am to 5:00pm</p>
                            </li>
                        </div>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751343148626!2d76.6597778!3d30.516086499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1708517767814!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
                </>


    )
}

export default AppDownload;

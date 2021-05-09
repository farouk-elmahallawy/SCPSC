import React from 'react'
import photo1 from '../images/1.webp'
import {FaFacebook} from 'react-icons/fa'
import './home.css'

function home() {
    return (
        <div className ='component home'>
            <div className='homeContainer'>
                <span className='filter'></span>
                <span className='filter2'></span>
                <h1>Down hole Best That is Served </h1>
                <p>Client Satisfaction is the heart of every decision we make.</p>
                <button> Buy Now</button>
                <div className='title'>
                    <img className='manger-pic' src={photo1} alt='manger'/>
                    <div className='title-body'>
                        <h1> 10 years of service </h1>
                        <p>Over 10 years of service in Oil And Gas industry and our experienced counselors are ready to help you!</p>
                    </div>
                    <div className='social'>
                        <p>SOCIAL</p>
                        <hr/>
                        <a href='/'><FaFacebook/></a>
                        <p>ABOUT US</p>
                        <hr/>
                    </div>
                    <div className='social-body'>
                        <div>
                            <h1> Our Experience </h1>
                            <p> After 10 years in Oil And Gas industry, we decided to alter direction. Now, we share use our experience to help others. Our ramp up process is designed to empower your technical team and outfit them with the tools they need to succeed. Ask us about: </p>
                            <ul>
                                <li> Java-based frameworks </li>
                                <li> Open-source technologies </li>
                                <li> Cloud-based development </li>
                                <li> End-to-end integration </li>
                                <li> Networks and systems security </li>
                                <li> Database and warehouse technology </li>
                            </ul>
                        </div>
                        <div>
                            <h1> Our Approach </h1>
                            <p> Our service includes a comprehensive consult to help identify gaps and opportunities, a comprehensive report that includes a project plan with timelines and milestones, a cost analysis, and a schedule. We also offer a suite of quality products that will help you get there quickly and smoothly.  </p>
                        </div>
                        <div>
                            <h1> Why Us? </h1>
                            <p> Business mentors are key—that’s why when it comes to client selection, we’re choosy. We want to give each of you the time and guidance they deserve. We didn’t get there alone. And neither will you. Call us today. </p>
                        </div>
                    </div>
                </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13771.753491617972!2d31.479883649999994!3d30.3527013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1617460773354!5m2!1sen!2seg" title='location' height="450" allowfullscreen="" loading="lazy"></iframe>
                    <footer> 
                        <div className='footer'>
                            <p> Copyright © 2021 AliensDeveloper - All Rights Reserved. </p>
                            <p> Powered by <a href='https://aliensdeveloper.com/'> AliensDeveloper </a> </p>
                        </div>
                    </footer>
            </div>
        </div>
    )
}

export default home

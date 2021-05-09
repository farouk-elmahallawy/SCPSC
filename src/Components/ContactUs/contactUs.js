import React from 'react'
import './contactUs.css'

function contactUs() {
    return (
        <div className ='component' >
            <div className='contactUsContainer'>
                <div className='contactFilter'></div>
                <div className='contactLeftDiv'>
                    <h1> Contact Us </h1>
                    <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <button> LEARN MORE </button>
                </div>
                <div className= 'contactRightDiv'>
                    <div className='email'>
                        <label> Email </label>
                        <input placeholder='Enter a valid email address' ></input>
                    </div>
                    <div className='name'>
                        <label> Name </label>
                        <input placeholder='Enter Your Name'></input>
                    </div>
                    <div className='address'>
                        <label> Address </label>
                        <input placeholder='Enter Your Address'></input>
                    </div>
                    <div className='message'>
                        <label> Message </label>
                        <textarea placeholder='Enter Your Message'></textarea>
                        <button type='submit'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactUs

import React from 'react'
import heavy from '../images/heavyIndustry.jpg'
import './profile.css'

function profile() {
    return (
        <div className ='component' >
            <div className="profile-container">
                <div className='first-part'>
                    <img src={heavy} alt="Manufacture" />
                    <div className='heavy'>
                        <h1> Heavy industry </h1>
                        <p> Heavy industry is also sometimes a special designation in local zoning laws. This allows industries with heavy impacts (on environment, infrastructure, and employment) to be sited with forethought.</p>
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>
                <footer className='profile-footer'>
                    <p> Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    <span> Website Templates created with <a href='/'> AliensDeveloper </a> </span>
                </footer>
        </div>
    )
}

export default profile

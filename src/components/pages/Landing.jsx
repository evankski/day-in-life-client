import { Navigate } from "react-router-dom"

import landing from "../../landing/landing"

import { Link } from "react-router-dom"


export default function Landing ({ currentUser }) {
    if (currentUser) return <Navigate to='/feed' />
    return (
        <div className="landing-page animate__animated animate__fadeIn">

            <div className="app-explanation-one">
                {/* <img src={landing[0].image} alt="" width={`10%`} className="image0"/> */}
                <h1 className="landing-text-one">A Day In The <span className="life">Life</span></h1>
                <p className="landing-p-one">{landing[0].content}</p>
                <a href={landing[0].github} className="github-button">View on Github</a>
                <img src="" alt="" />
            </div>

            <div className="app-explanation-two">
            
                <h4 className="landing-text">{landing[1].contentOne}</h4>
            
                <h4 className="landing-text">{landing[1].contentTwo}</h4>
            
                <h4 className="landing-text">{landing[1].contentThree}</h4>
            </div>

            <img src='https://i.imgur.com/2ROHQIx.png' alt="" className="imgur"/>

            <div className="app-explanation">
                
                <h3 className="landing-text-bot">{landing[2].content}</h3>
                <Link to='/register' className='github-button'>Register Here</Link>
            </div>
        </div>
    )
}
import { Navigate } from "react-router-dom"

import landing from "../../landing/landing"

export default function Landing ({ currentUser }) {
    if (currentUser) return <Navigate to='/feed' />
    return (
        <div className="landing-page">

            <div className="app-explanation-one animate__animated animate__fadeIn">
                {/* <img src={landing[0].image} alt="" width={`10%`} className="image0"/> */}
                <h1 className="landing-text-one">{landing[0].header}</h1>
                <p className="landing-p-one">{landing[0].content}</p>
                <a href={landing[0].github} className="github-button">View on Github</a>
            </div>
            <div className="app-explanation-two animate__animated animate__fadeIn">
            
                <h3 className="landing-text">{landing[1].content}</h3>
            
                <h3 className="landing-text">{landing[1].content}</h3>
            
                <h3 className="landing-text">{landing[1].content}</h3>
            </div>
            <div className="app-explanation animate__animated animate__fadeIn">
                <img src={landing[2].image} alt="" width={`10%`} className="image0"/>
                <h3 className="landing-text">{landing[2].content}</h3>
            </div>
        </div>
    )
}
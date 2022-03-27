import landing from "../../landing/landing"

export default function Landing () {
    return (
        <>
            <div className="app-explanation">
                <img src={landing[0].image} alt="" width={`10%`} className="image0"/>
                <h3 className="landing-text">{landing[0].content}</h3>
            </div>
            <div className="app-explanation">
                <img src={landing[1].image} alt="" width={`10%`} className="image1"/>
                <h3 className="landing-text">{landing[1].content}</h3>
            </div>
            <div className="app-explanation">
                <img src={landing[2].image} alt="" width={`10%`} className="image0"/>
                <h3 className="landing-text">{landing[2].content}</h3>
            </div>
        </>
    )
}
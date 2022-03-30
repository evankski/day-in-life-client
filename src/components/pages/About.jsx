import Bio from "../partials/Bio"
import members from "../../members"

export default function About() {

    const allMembers = members.map((member,idx) => {
        return (
            <Bio key={`member-${idx}`} member={member} />
        )
    })

    return (
        <>
            <h1 className="about-h1 animate__animated animate__jello">About <span className="life">Page</span></h1>
            <div className="row">
                {allMembers}
            </div>
        </>
    )
}
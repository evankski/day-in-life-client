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
            <h1>About Page</h1>
            <div className="row">
                {allMembers}
            </div>
        </>
    )
}
import Bio from "../partials/Bio"
import members from "../../members"

export default function About() {

    const allMembers = members.map((member,idx) => {
        return (
            <div key={`member-${idx}`}>
                <img src={`${member.image_url}`} alt={`Picture of ${member.name}`} width={'20%'} style={{borderRadius: 400/ 2}}/>
                <h1>{member.name}</h1>
                <p>{member.bio}</p>
                <a href={`mailto:${member.email}`}> <img src="https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png" width={'10%'} alt={`Email ${member.name} button`} /> </a>
            </div>
        )
    })

    return (
        <>
            <h1>About Page</h1>
            {allMembers}
            {/* <Bio />
            <Bio />
            <Bio /> */}
        </>
    )
}
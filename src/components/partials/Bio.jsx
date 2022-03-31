export default function Bio({ member }) {
    return (
        <div className='column bg-light bios'>
            <img className='center' src={`${member.image_url}`} alt={`Picture of ${member.name}`} width={'60%'} style={{borderRadius: 400/ 2}}/>
            <h1 className="member-name">{member.name}</h1>
            <p>{member.bio}</p>

            <div className="socials">
                <a href={`mailto:${member.email}`}> <i className='fas fa-envelope'></i> </a>
                <a target="_blank" rel="noreferrer" href={member.linkedin}> <i className='fab fa-linkedin'></i> </a>
                <a target="_blank" rel="noreferrer" href={member.github}> <i className='fab fa-github'></i> </a>
            </div>
        </div>
    )
}
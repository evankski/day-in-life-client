export default function Bio({ member }) {
    return (
        <div className='column bg-light'>
            <img className='center' src={`${member.image_url}`} alt={`Picture of ${member.name}`} width={'60%'} style={{borderRadius: 400/ 2}}/>
            <h1 className="member-name">{member.name}</h1>
            <p>{member.bio}</p>
            <a href={`mailto:${member.email}`}> <img src="https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png" width={'10%'} alt={`Email ${member.name} button`} /> </a>
        </div>
    )
}
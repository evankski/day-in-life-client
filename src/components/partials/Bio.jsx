export default function Bio({ member }) {
    return (
        <div className='column bg-light'>
            <img className='center' src={`${member.image_url}`} alt={`Picture of ${member.name}`} width={'60%'} style={{borderRadius: 400/ 2}}/>
            <h1 className="member-name">{member.name}</h1>
            <p>{member.bio}</p>
            <a href={`mailto:${member.email}`}> <img src="https://i.imgur.com/iZDfazp.png" width={'20%'} alt={`Email ${member.name} button`} /> </a>
        </div>
    )
}
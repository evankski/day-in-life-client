export default function Comment({ comment }) {
    // reformat datestring to be more readable for users
    let date = new Date(comment.createdAt)
    date = date.toString()
    date = date.substring(0, 24)
    
    return (
        <>
            <h3>{comment.name}</h3>
            <p>{comment.content}</p>
            <p>Date posted: {date}</p>
        </>
    )
}
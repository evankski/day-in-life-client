export default function CaptionForm({ handleSubmit, commentForm, setCommentForm }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newComment"></label>
                <input type="text" id="newComment" placeholder="Enter comment..." onChange={e => setCommentForm(e.target.value)} value={commentForm} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
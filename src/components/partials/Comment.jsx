import axios from 'axios'
import { useState } from 'react'

import CommentForm from '../partials/CommentForm'

export default function Comment({ comment, currentUser, photoId, actions, setActions }) {
    // reformat datestring to be more readable for users
    let date = new Date(comment.createdAt)
    date = date.toString()
    date = date.substring(0, 24)

    // STATE
    const [editComment, setEditComment] = useState(false)
    const [commentForm, setCommentForm] = useState('')

    // FUNCTIONS
    const putComment = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('jwt')
            const options = {
                headers: {
                    'Authorization': token
                }
            }
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/comments/${comment._id}`, { name: currentUser.name, content: commentForm, photoId: photoId}, options)
            // console.log(response.data)
            setCommentForm('')
            setEditComment(false)
            setActions(actions+1)
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('jwt')
            const options = {
                data: {
                    photoId: photoId
                },
                headers: {
                    'Authorization': token
                }
            }
            const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/comments/${comment._id}`, options)
            // console.log(response.data)
            setEditComment(false)
            setActions(actions+1)
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <>
            <h3>{comment.name}</h3>
            {editComment ? 
                (
                    <>
                        <CommentForm handleSubmit={putComment} commentForm={commentForm} setCommentForm={setCommentForm} /> 
                        <button onClick={handleDelete}>Delete</button>
                    </>
                 ) : 
                 <p>{comment.content}</p>}
            
            <p>Date posted: {date}</p>
            {comment.user_id === currentUser.id && <button onClick={() => setEditComment(!editComment)}>{editComment ? 'Back' : 'Edit'}</button>}
        </>
    )
}
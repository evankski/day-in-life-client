import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Comment from '../partials/Comment'
import EditCaptionForm from '../partials/EditCaptionForm'

export default function Picture({ setUsers, currentUser }) {

    // PARAMS
    const { id } = useParams()

    // STATE
    const [photo, setPhoto] = useState({
        comments: []
    })
    const [ownerId, setOwnerId] = useState('')
    const [editCaption, setEditCaption] = useState(false)
    const [captionForm, setCaptionForm] = useState('')
    const [form, setForm] = useState({
        name: '',
        content: '',
        user_id: '',
        photoId: ''
    })

    // USE-EFFECT
    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem('jwt')
                const options = {
                    headers: {
                        'Authorization': token
                    }
                }
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/pictures/${id}`, options)
                // console.log(response.data)
                setPhoto(response.data.foundPhoto)
                setOwnerId(response.data.ownerId)
            } catch (err) {
                console.log(err)
            }
        })()
    },[])

    // FUNCTIONS
    const putCaption = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('jwt')
            const options = {
                headers: {
                    'Authorization': token
                }
            }
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/pictures/${id}`, {caption: captionForm}, options)
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const postComment = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/api-v1/comments', form)
        } catch (err) {
            console.log(err)
        }
    }

    // COMPONENTS
    const commentsList = photo.comments.map((comment, idx) => {
        return <Comment key={`comment-${idx}`} comment={comment} /> 
    })
    
    return (
        <>
            <h1>Picture Detail Page with associated comments</h1>
            {photo ? 
                (
                    <>
                        <img src={`https://res.cloudinary.com/dhs1wrqhp/image/upload/${photo.public_id}`} alt="user photo" /> 
                        {editCaption ? <EditCaptionForm putCaption={putCaption} captionForm={captionForm} setCaptionForm={setCaptionForm}/> : <p>{photo.caption}</p>}
                        {currentUser ? (ownerId === currentUser.id ? <button onClick={() => setEditCaption(!editCaption)}>{editCaption ? 'Back' : 'Edit'}</button> : null) : null}
                    </>
                ) : 
                null }
            <div>
                {commentsList}
            </div>
        </>
        
    )
}
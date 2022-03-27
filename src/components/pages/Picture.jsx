import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Comment from '../partials/Comment'

export default function Picture({ setUsers }) {

    // PARAMS
    const { id } = useParams()

    // STATE
    const [photo, setPhoto] = useState({
        comments: []
    })
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
                console.log(response.data)
                setPhoto(response.data)
            } catch (err) {
                console.log(err)
            }
        })()
    },[])

    // FUNCTIONS
    const handleSubmit = async (e) => {
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
                        <p>{photo.caption}</p>
                    </>
                ) : 
                null }
            <div>
                {commentsList}
            </div>
        </>
        
    )
}
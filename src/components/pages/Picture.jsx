import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Comment from '../partials/Comment'

export default function Picture({ users, setUsers }) {

    const { id } = useParams()

    const [form, setForm] = useState({
        name: '',
        content: '',
        user_id: '',
        photoId: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/api-v1/comments', form)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1>Picture Detail Page with associated comments</h1>
            <h3>Big Picture Here</h3>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </>
        
    )
}
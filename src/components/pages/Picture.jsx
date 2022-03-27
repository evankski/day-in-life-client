import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Comment from '../partials/Comment'

export default function Picture({ setUsers }) {

    // PARAMS
    const { id } = useParams()

    // STATE
    const [photo, setPhoto] = useState({})
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
                        'authorization': token
                    }
                }
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/pictures/${id}`, options)
                // console.log(response.data)
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
    

    return (
        <>
            <h1>Picture Detail Page with associated comments</h1>
            <h3>Big Picture Here</h3>

            {/* <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment /> */}
        </>
        
    )
}
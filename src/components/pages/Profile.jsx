import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Photo from '../partials/Photo'

export default function Profile() {

    // PARAMS
    const { id } = useParams()

    // STATE
    const [user, setUser] = useState({
        photos: []
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
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`, options)
                console.log(response.data)
                setUser(response.data)
            } catch (err) {
                console.log(err)
            }
        })()
    },[])

    // FUNCTIONS
    
    // COMPONENTS
    const photosList = user.photos.map((photo, idx) => {
        return <Photo key={`photo-${idx}`} photo={photo} />
    })
    
    return (
        <>
            <h1>Profile Page with :id user's photos</h1>
            <div>
                {photosList}
            </div>
        </>
    )
}
import { useState, useEffect } from 'react'
import axios from 'axios'

import Slideshow from '../partials/Slideshow'

export default function Feed ({ currentUser }) {

    // STATE
    const [users, setUsers] = useState([])

    // const [msg, setMsg] = useState('')
    // use useEffect to get data from the back-end
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             // get token from local storage
    //             const token = localStorage.getItem('jwt')
    //             // console.log(token)

    //             // make the auth headers
    //             const options = {
    //                 headers: {
    //                     'Authorization': token
    //                 }
    //             }
    //             // console.log(options)

    //             // hit the auth-locked endpoint
    //             // axaios.get(url, options)
    //             // axaios.post(url, body, options)
    //             // axaios.put(url, body, options)
    //             const response = await axios.get(process.env.REACT_APP_SERVER_URL+'/api-v1/users/auth-locked', options)

    //             // set the data from the server in state
    //             setMsg(response.data.msg)

    //         } catch (err) {
    //             console.log(err)
    //         }
    //     })()
    // }, [])

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
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`, options)
                console.log(response.data)
                setUsers(response.data)
            } catch (err) {
                console.log(err)
            }
        })()
    },[])

    // FUNCTIONS

    // COMPONENTS
    const usersList = users.map((user, idx) => {
        return <Slideshow key={`user-${idx}`} user={user} />
    })

    return (
        <div className="feed-page">
            <h1 className='dil'>A day in the life</h1>
            <div className='polaroid-container'>
                {usersList}    
            </div>
        
                


            {/* <h3>{currentUser.name}'s Feed</h3>
            <p>your email is {currentUser.email}</p>
            <h4>message from the auth-locked route:</h4>
            <h6>{msg}</h6> */}
        </div>
    )
}
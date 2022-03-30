import axios from "axios"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function UploadPicture({currentUser}) {

    let navigate = useNavigate()
    
    // STATE
    const [formImg, setFormImg] = useState('')
    const [caption, setCaption] = useState('')
    const [fileName, setFileName] = useState('')
    const [msg, setMsg] = useState('')
   

    // FUNCTIONS
    const handleSubmit = async e => {
        e.preventDefault()
        try {
          const token = localStorage.getItem('jwt')
          const options = {
                headers: {
                    'Authorization': token
                }
          }
          // multipart form data object
          const fd  = new FormData()
          //   append the data
          fd.append('image', formImg)
          fd.append('caption', caption)
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/pictures`, fd, options)
          navigate(`/profiles/${currentUser.id}`)
            //   <Navigate to={`/profiles/${currentUser.id}`} />
        } catch(err) {
            console.log(err)
            setMsg('Go check the server console, there was an error')
        }
    }

    const handleChange = (e) => {
        setFormImg(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    return ( 
        <div className='bg-light margin-lr'>
            <h2>Upload an Image</h2>
            <i className='fas fa-cloud-upload-alt'></i>
            <form 
              onSubmit={handleSubmit}
              encType='multipart/form'
            >
                <div className="column">
                    <label htmlFor="image" className='image-upload'>
                        Choose File
                    </label>    
                    <input 
                        // no value on this controlled form
                        type="file" 
                        id="image"
                        onChange={handleChange}
                        style={{display: 'none'}}
                        />
                    <lable id='file-name'>{fileName}</lable>
                    <input 
                        type="text" 
                        id="caption"
                        autoComplete='off'
                        placeholder='Enter caption here...'
                        onChange={e => setCaption(e.target.value)}
                        value={caption}
                        />
                    <button className='btn' type="submit">Submit</button>

                </div>
            </form>
        </div>
     );
}

export default UploadPicture;
import axios from "axios"
import { useState } from "react"

function UploadPicture() {
    const [formImg, setFormImg] = useState('')
    const [caption, setCaption] = useState('')
    const [msg, setMsg] = useState('')
    const [displayImg, setDisplayImg] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        try {
          // multipart form data object
          const fd  = new FormData()
          //   append the data
          fd.append('image', formImg)
          fd.append('caption', caption)
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/pictures`, fd)
          console.log(response.data)
          setDisplayImg(response.data.cloudImage)
        } catch(err) {
            console.log(err)
            setMsg('Go check the server console, there was an error')
        }
    }
    return ( 
        <div>
            <form 
              onSubmit={handleSubmit}
              encType='multipart/form' >
                <label htmlFor="image">Upload an image</label>    
                <input 
                    // no value on this controlled form
                    type="file" 
                    id="image"
                    onChange={e => setFormImg(e.target.files[0])}
                />
                <input 
                    type="text" 
                    id="caption"
                    onChange={e => setCaption(e.target.value)}
                    value={caption}
                />
                <input type="submit"/>
            </form>
        </div>
     );
}

export default UploadPicture;
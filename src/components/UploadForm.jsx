import React, {useState} from "react"
import ProgressBar from "./ProgressBar"
import {AiFillPlusCircle} from "react-icons/ai"

const UploadForm = () => {
    /** Store file object */
    const [file, setFile] = useState(null)

    /** Store error message */
    const [error, setError] = useState(null)

    /**
     * File input change handler
     * @param e - event
     */
    const changeHandler = (e) => {
        const allowTypes = ["image/png", "image/jpeg"]
        const files = e.target.files[0]

        if (files && allowTypes.includes(files.type)) {
            setFile(files)
            setError('')
        } else {
            setFile(null)
            setError("Please select an image file (png, jpg)")
        }
    }

    return <form className="photogram__form container">
        <label className="photogram__form-label">
            <input type="file" onChange={changeHandler}/>
            <AiFillPlusCircle size={30} className="photogram__form-field"/>
        </label>
        {error && <p className="error">{error}</p>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
    </form>
}

export default UploadForm

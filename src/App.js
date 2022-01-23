import React, {useState} from "react"
import UploadForm from "./components/UploadForm"
import ImageGrid from "./components/ImageGrid"
import Modal from "./components/Modal"

const App = () => {
    /** Store selected image */
    const [selImage, setSelImage] = useState(null)

    return <div className="photogram">
        <h1 className="photogram__title">PhotoGram</h1>
        <UploadForm/>
        <ImageGrid setSelImage={setSelImage}/>
        {selImage && <Modal selImage={selImage} setSelImage={setSelImage}/>}
    </div>
}

export default App

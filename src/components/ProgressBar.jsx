import React, {useEffect} from "react"
import {motion} from "framer-motion"
import useStorage from "../hooks/useStorage"

const ProgressBar = ({file, setFile}) => {
    /**
     * url - store file url
     * progress - store file loading progress
     */
    const {url, progress} = useStorage(file)

    useEffect(() => {
        /** If file exists */
        if (url) setFile(null)
    }, [url, setFile])

    return <div className="photogram__progress">
        <h3 className="photogram__progress-title">{`Loading: ${progress}%`}</h3>
        <motion.div className="photogram__progress-line" initial={{width: 0}} animate={{width: `${progress}%`}}/>
    </div>
}

export default ProgressBar

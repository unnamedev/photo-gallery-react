import React from "react"
import {motion} from "framer-motion"

const Modal = ({selImage: {url, name}, setSelImage}) => {
    /**
     * Modal click handler
     * @param e
     * @returns {*|boolean}
     */
    const handleClick = (e) => e.target.classList.contains("modal") ? setSelImage(null) : false

    return <motion.div
        className="modal"
        onClick={handleClick}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
    >
        <img className="modal__image" src={url} alt={name}/>
    </motion.div>
}

export default Modal

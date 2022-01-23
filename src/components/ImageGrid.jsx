import React from "react"
import useFirestore from "../hooks/useFirestore"
import {motion, AnimateSharedLayout} from "framer-motion"

const ImageGrid = ({setSelImage}) => {
    /** Store data from images database */
    const {docs} = useFirestore('images')

    return <AnimateSharedLayout>
        <ul className="photogram__list container">
            {docs && docs.map((doc) => (
                <motion.li
                    className="photogram__list-card photogram__card"
                    key={doc.id}
                    onClick={() => setSelImage({url: doc.url, name: doc.name})}
                    layout
                    whileHover={{opacity: 1}}
                >
                    <motion.div
                        className="photogram__card-content"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                    >
                        <div className="photogram__card-header">
                            <img className="photogram__list-image" src={doc.url} alt={doc.name}/>
                        </div>
                        <div className="photogram__card-body">
                            <h3 className="photogram__card-name">{doc.name}</h3>
                            <p className="photogram__card-date">{doc.date}</p>
                            <p className="photogram__card-size">{doc.size}</p>
                        </div>
                    </motion.div>
                </motion.li>
            ))}
        </ul>
    </AnimateSharedLayout>
}

export default ImageGrid

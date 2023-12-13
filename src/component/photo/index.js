import "./index.css"

import photo from "./index.png" 

export default function Photo() {
    return (
        <img src={photo} className="photo" alt="Photo"></img>
    )
}
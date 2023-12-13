import Heading from "../heading";

import "./index.css"

export default function Discription({ title, children }) {
    return (
        <div className="discription">
           <Heading>{title}</Heading>

           <p className="discription__text">{children}</p>
        </div>
    )
}




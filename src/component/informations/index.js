import Heading from "../heading";
import Title from "../title"

import "./index.css"

export default function Informations({ name, response_rate, response_time, info, phone, image }) {
    return (
        <div className="informations">
            <div className="informations__info">
                <div>
                    <img src={image} className="informations__image"></img>
                </div>

                <div className="informations__contact">
                    <Heading>Господар – {name}</Heading>
                    <div className="informations__sub">
                        <span className="informations__sub-value">{phone}</span>
                        <span className="informations__sub-value">{response_time}</span>
                        <span className="informations__sub-value">{100}% percent response rate</span>
                    </div>
                </div>
            </div>

           <p className="informations__description">{info}</p>
        </div>
    )
}




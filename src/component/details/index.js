import "./index.css"
import Heading from "../heading";
import Box from "../box"
import ListItem from "../list-item"

import guestsImage from "./guests.svg"
import bedroomsImage from "./bedrooms.svg"
import bedsImage from "./beds.svg"
import bathsImage from "./baths.svg"

export default function Details({ title, guests, bedrooms, beds, baths }) {
   return (
    <Box shadow>
        <Heading border>{title}</Heading>

        <List 
        guests={guests}
        bedrooms={bedrooms}
        beds={beds}
        baths={baths}
        />
    </Box>
   )
}

function List({ guests, bedrooms, beds, baths }) {
    return (
        <ul className="details__list">
            <ListItem imageSrc={guestsImage}>
                <span>{guests}</span>
                <span>гості</span>
            </ListItem>

            <ListItem imageSrc={bedroomsImage}>
                <span>{bedrooms}</span>
                <span>спальня</span>
            </ListItem>

            <ListItem imageSrc={bedsImage}>
                <span>{beds}</span>
                <span>ліжко</span>
            </ListItem>

            <ListItem imageSrc={bathsImage}>
                <span>{baths}</span>
                <span>ванна кімната</span>
            </ListItem>
        </ul>
    )
}
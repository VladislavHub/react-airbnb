import "./index.css"
import Heading from "../heading";
import Box from "../box"
import ListItem from "../list-item"

import poolImage from "./svg/pool.svg"
import airportImage from "./svg/airport.svg"
import childImage from "./svg/child.svg"
import breakfastImage from "./svg/breakfast.svg"
import conceirgeImage from "./svg/conceirge.svg"
import gymImage from "./svg/gym.svg"
import parkingImage from "./svg/parking.svg"
import petsImage from "./svg/pets.svg"
import roomServiceImage from "./svg/roomService.svg"
import wifiImage from "./svg/wifi.svg"

export default function Handiness({ 
    pool,
    gym,
    freeBreakfast,
    freeWiFi,
    parking,
    petsAllowed,
    airportShuttle,
    conciergeService,
    roomService,
    childFriendly,
    title,
    }) {
        return (
            <Box shadow>
                <Heading border>{title}</Heading>

                <List 
                pool={pool}
                gym={gym}
                freeBreakfast={freeBreakfast}
                freeWiFi={freeWiFi}
                parking={parking}
                petsAllowed={petsAllowed}
                airportShuttle={airportShuttle}
                conciergeService={conciergeService}
                roomService={roomService}
                childFriendly={childFriendly}
                />
            </Box>
        )
}

function List({
    pool,
    gym,
    freeBreakfast,
    freeWiFi,
    parking,
    petsAllowed,
    airportShuttle,
    conciergeService,
    roomService,
    childFriendly,
}) {
    return (
        <ul className="handiness__list">
            {pool && (
                <ListItem imageSrc={poolImage}>
                    <span>Басейн</span>
                </ListItem>
            )}

            {gym && (
                <ListItem imageSrc={gymImage}>
                    <span>Спортивний зал</span>
                </ListItem>
            )}

            {freeBreakfast && (
                <ListItem imageSrc={breakfastImage}>
                    <span>Безкоштовний сніданок</span>
                </ListItem>
            )}

            {freeWiFi && (
                <ListItem imageSrc={wifiImage}>
                    <span>Безкоштовний Wi-Fi</span>
                </ListItem>
            )}

            {parking && (
                <ListItem imageSrc={parkingImage}>
                    <span>Безкоштовний вуличний паркінг</span>
                </ListItem>
            )}

            {petsAllowed && (
                <ListItem imageSrc={petsImage}>
                    <span>Дозволено розміщення з домашніми тваринами</span>
                </ListItem>
            )}

            {airportShuttle && (
                <ListItem imageSrc={airportImage}>
                    <span>Трансфер до/з аеропорту</span>
                </ListItem>
            )}

            {conciergeService && (
                <ListItem imageSrc={conceirgeImage}>
                    <span>Консьєрж-сервіс</span>
                </ListItem>
            )}

            {roomService && (
                <ListItem imageSrc={roomServiceImage}>
                    <span>Обслуговування номерів</span>
                </ListItem>
            )}

            {childFriendly && (
                <ListItem imageSrc={childImage}>
                    <span>Підходить для дітей</span>
                </ListItem>
            )}
            
        </ul>
    )
}

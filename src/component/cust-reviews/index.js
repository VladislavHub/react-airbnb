import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css"

export default function Reviews({ list, title }) {
    return (
        <div className="reviews__block">
            <Heading>{title}</Heading>

            <div className="reviews__list">
                {list.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <Item {...rest}/>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

function Item({ guestName, rating, review }) {
    return (
        <Box className="reviews">
            <div className="reviews__header">
                <span className="reviews__title">{guestName}</span>
                <span className="reviews__info">Рейтинг: {rating}</span>
            </div>

            <span className="reviews__text">
                {review}
            </span>
        </Box>
    )
}


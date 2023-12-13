import "./index.css"
import Heading from "../heading";
import Box from "../box"
import ListItem from "../list-item"

export default function Attractions({ list, title }) {
   return (
    <Box shadow>
        <Heading border>{title}</Heading>

        
        {list.map(({ id, ...rest }) => (
            <List {...rest} key={id} />
        ))}
       
    </Box>
   )
}

function List({ name, link }) {
    return (
        <ul className="attractions__list">

            <ListItem>
                <a href={link} className="link">{name}</a>
            </ListItem>

        </ul>
    )
}
import "./index.css"
import Heading from "../heading";
import Box from "../box"
import ListItem from "../list-item"

export default function Properties({ title, rules, policy, transport, lang, offers, instructions }) {
   return (
    <Box shadow>
        <Heading border>{title}</Heading>

        <List 
        rules={rules} 
        policy={policy}  
        transport={transport} 
        lang={lang}
        offers={offers} 
        instructions={instructions} 
        />
    </Box>
   )
}

function List({ rules, policy, transport, lang, offers, instructions }) {
    return (
        <ul className="properties__list">

            <ListItem title="Правила дому">
                <div>{rules}</div>
            </ListItem>

            <ListItem title="Політика скасування">
                <span>{policy}</span>
            </ListItem>

            <ListItem title="Місцевий транспорт">
                <span>{transport}</span>
            </ListItem>

            <ListItem title="Мови хоста">
                <span>{lang}</span>
            </ListItem>

            <ListItem title="Спеціальні пропозиції:">
                <span>{offers}</span>
            </ListItem>

            <ListItem title="Інструкції щодо реєстрації">
                <span>{instructions}</span>
            </ListItem>

        </ul>
    )
}
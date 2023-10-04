import { List, ListItem, ListItemText } from '@mui/material';
import * as React from 'react';

function ItemsList (props) {
    return(
        <List >
            {props.items.map((item) => (
            <ListItem key={item} divider>
                <ListItemText 
                    secondaryTypographyProps={{color:"inherit"}}
                    primary={
                        item.endDate
                          ? `${item.title} | ${item.startDate} - ${item.endDate}`
                          : (item.startDate ?`${item.title} | ${item.startDate}`: `${item.title}`)
                      }
                    
                    secondary={item.description}
                >
                </ListItemText>
            </ListItem>))}
            
        </List>
    )
}

export default ItemsList;
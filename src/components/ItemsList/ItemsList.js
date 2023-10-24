import { List, ListItem, ListItemText } from '@mui/material';
import * as React from 'react';
import CurricularPlan from '../CurricularPlan/CurricularPlan';

function ItemsList (props) {
    return(
        <List >
            {props.items.map((item, index) => (
                <ListItem key={item.title+index} divider>
                    <ListItemText 
                        disableTypography={props.disableTypography}
                        secondaryTypographyProps={{color:"inherit"}}
                        primary={
                            item.endDate
                            ? `${item.title} | ${item.startDate} - ${item.endDate}` 
                            : (item.startDate ?`${item.title} | ${item.startDate}`: `${item.title}`) 
                        }
                        
                        secondary={item.description }
                    >
                        
                    </ListItemText>    
                    {props.academic && 
                            <CurricularPlan items={item.curricularPlan}></CurricularPlan> }
                </ListItem>))
            }
            
        </List>
    )
}

export default ItemsList;
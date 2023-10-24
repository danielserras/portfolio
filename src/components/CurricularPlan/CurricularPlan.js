import * as React from "react";
import {Button, Modal, Box, List, ListItem, ListItemText, Typography} from '@mui/material';


function CurricularPlan(props) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "75%",
        maxHeight: "70%",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflowY: "auto"
    };
      
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button size="small" variant="elevated" onClick={handleOpen}>Ver plano curricular</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >   
                <Box sx={style}>
                        <Typography  component="h2" variant="h6">Plano Curricular</Typography>
                    <List >
                        {props.items && props.items.map((item, index) => (
                            <ListItem key={item.title+index} divider>
                                <ListItemText 
                                    secondaryTypographyProps={{color:"inherit"}}
                                    primary={
                                        item.title 
                                    }
                                >
                                    
                                </ListItemText>    
                            </ListItem>))
                        }
                        
                    </List>
                </Box>
            </Modal>
        </div>
    )
}

export default CurricularPlan;
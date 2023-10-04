import { Box, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import * as React from 'react';

function ProjInfo(props) {
    return (
        <Grid item xs={12} md={6}>
            <Box sx={{ mt: 3, boxShadow: 2, minHeight: "100%" }}>
                <Typography inline sx={{ ml: 0, color: "primary.main" }} variant="h6" component="h3">{props.data.cadeira} </Typography>
                {props.data.subtitle ? 
                    <Typography sx={{color: "primary.main"}} variant="subtitle">{props.data.subtitle}</Typography>
                    : <Typography sx={{ color: "primary.main" }} variant="subtitle">{props.data.licenciatura ? "Licenciatura" : "Mestrado"} | {props.data.ano} Ano, {props.data.semestre} Semestre</Typography> 
                }   
                <Divider sx={{ bgcolor: "primary.main" }} variant="middle"></Divider>
                <List>
                    {props.data.projetos.map((item) => (
                        <ListItem>
                            <ListItemText
                                primary={item.descricao}
                                secondary={`Tecnologias e ferramentas utilizadas: ${item.tecnologias}`}
                            >

                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Grid>
    )

}

export default ProjInfo;            
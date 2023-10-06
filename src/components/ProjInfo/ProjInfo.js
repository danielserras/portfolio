import { Box, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import * as React from 'react';

function ProjInfo(props) {
    return (
        <Grid item xs={12} md={6}>
            <Box sx={{p:2, mt: 3, boxShadow: 2, minHeight: "100%" }}>
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
                                primaryTypographyProps={align:"justify"}
                                secondary={`Tecnologias e ferramentas utilizadas: ${item.tecnologias.join(", ")}`}
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
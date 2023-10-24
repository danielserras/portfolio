import * as React from 'react';
import Section from '../Section/Section';
import { Grid, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import ProjInfo from '../ProjInfo/ProjInfo';
import {frontend, backend, fullstack, ui, others, databases} from './data';

function Projects () {
    const [checkboxes, setCheckboxes] = React.useState({
        Todos: true,
        Fullstack: true,
        'Front-end': true,
        'Back-end': true,
        'Bases de Dados': true,
        'UI/UX': true,
        Outros: true,
    });

    const [projects, setProjects] = React.useState([]);
    
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
    
        if (name === 'Todos') {
          const updatedCheckboxes = Object.keys(checkboxes).reduce((acc, key) => {
            acc[key] = checked;
            return acc;
          }, {});
          setCheckboxes(updatedCheckboxes);
        } else {
          setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [name]: checked,
            Todos: false, 
          }));
        }
      };

    return(
        <Section id={"page_2"} textColor="#000000" color="#FFFFFF" title="Projetos">
            <Typography variant="body1" color="initial">Nesta secção são apresentados
            vários projetos desenvolvidos no âmbito das cadeiras frequentadas, 
            e outros realizados fora deste âmbito.</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="caption">Filtros:</Typography>
                    <FormGroup row sx={{ minWidth: '100%' }}>
                        {Object.keys(checkboxes).map((label) => (
                            <FormControlLabel
                            key={label}
                            control={
                                <Checkbox
                                name={label}
                                checked={checkboxes[label]}
                                onChange={handleCheckboxChange}
                                />
                            }
                            label={label}
                            />
                        ))}
                    </FormGroup>
                </Grid>
                {checkboxes.Fullstack && fullstack.map((item, index) => (
                    <ProjInfo key={index} data={item}></ProjInfo>
                ))}
                {checkboxes['Back-end'] && backend.map((item, index) => (
                    <ProjInfo key={index} data={item}></ProjInfo>
                ))}
                {checkboxes['Front-end'] && frontend.map((item, index) => (
                    <ProjInfo key={index} data={item}></ProjInfo>
                ))}
                {checkboxes['UI/UX'] && ui.map((item, index) => (
                    <ProjInfo key={index} data={item}></ProjInfo>
                ))}
                {checkboxes['Bases de Dados'] && databases.map((item, index) => (
                    <ProjInfo key={index} data={item}></ProjInfo>
                ))}
                {checkboxes.Outros && others.map((item, index) => (
                    <ProjInfo key={index} data={item}></ProjInfo>
                ))}
            </Grid>
        </Section>
    )
}

export default Projects;
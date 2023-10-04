import * as React from 'react';
import Section from '../Section/Section';
import ItemsList from '../ItemsList/ItemsList';
import { volItems, musicItems, sportItems } from './data';
import { Typography } from '@mui/material';

function Hobbies () {
    return(
        <Section id={"page_4"} textColor="#000000" color="#EFF1ED" title="Hobbies">
            <Typography component="h2" variant="h5">Voluntariado</Typography>
            <ItemsList items={volItems}></ItemsList>
            <Typography component="h2" variant="h5">Música</Typography>
            <ItemsList items={musicItems}></ItemsList>
            <Typography component="h2" variant="h5">Desporto</Typography>
            <ItemsList items={sportItems}></ItemsList>
        </Section>
    )
}

export default Hobbies;
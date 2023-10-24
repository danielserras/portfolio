import * as React from 'react';
import Section from '../Section/Section';
import { workItems } from './data';
import ItemsList from '../ItemsList/ItemsList';

function Work () {
    return(
        <Section id={"page_1"} textColor="#000000" color="#EFF1ED" title="Experiência Profissional">
            <ItemsList items={workItems} disableTypography></ItemsList>
        </Section>
    )
}

export default Work;
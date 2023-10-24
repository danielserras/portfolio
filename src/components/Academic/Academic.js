import * as React from 'react';
import Section from '../Section/Section';
import ItemsList from '../ItemsList/ItemsList';
import { academicItems } from './data';

function Academic () {
    return(
        <Section id="page_0" color="#FFFFFF" title="Percurso Académico">
            <ItemsList academic items={academicItems}></ItemsList>
        </Section>
    )
}

export default Academic;
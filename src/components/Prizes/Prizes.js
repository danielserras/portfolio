import * as React from 'react';
import Section from '../Section/Section';
import ItemsList from '../ItemsList/ItemsList';
import { prizesItems } from './data';

function Prizes () {
    return(
        <Section id={"page_3"} textColor="#FFFFFF" color="#004d40" title="Prémios">
            <ItemsList items={prizesItems}></ItemsList>
        </Section>
    )
}

export default Prizes;
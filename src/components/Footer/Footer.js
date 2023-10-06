import * as React from 'react';
import Typography from '@mui/material/Typography'
import Section from '../Section/Section';


function Footer(){
    return (
        <Section textColor="#FFFFFF" color="#153C57">
            <Typography variant="caption">© Copyright Daniel Serras 2023. Todos os direitos reservados.</Typography>
        </Section>
    )
}

export default Footer;
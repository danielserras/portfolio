import * as React from 'react';
import Section from '../Section/Section';
import ItemsList from '../ItemsList/ItemsList';
import { Button, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contacts () {
    return(
        <Section id={"page_6"} textColor="#FFFFFF" color="#153C57" title="Contactos">
            <Button variant="text" sx={{color:"#FFF"}} startIcon={<LinkedInIcon></LinkedInIcon>} href="https://www.linkedin.com/in/daniel-serras/">
                Linkedin
            </Button>
        </Section>
    )       
}

export default Contacts;
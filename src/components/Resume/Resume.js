import * as React from 'react';
import Section from '../Section/Section';
import curriculo from '../../curriculo_sem_contactos.pdf'
import './Resume.css';

function Resume() {
    const [zoom, setZoom] = React.useState(1); // Initial zoom level

    const zoomIn = () => setZoom(zoom + 0.1); // Increase zoom level
    const zoomOut = () => setZoom(zoom - 0.1); // Decrease zoom level

    const pageNumber = 1;
    return(
        <Section id={"page_4"} textColor="#000000" color="#FFFFFF" title="Currículo">
            <iframe src={curriculo} 
                width="100%"
                height="1100">
            </iframe>
        </Section>    
    )
}

export default Resume;
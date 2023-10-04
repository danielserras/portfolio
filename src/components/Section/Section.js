import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Section (props){
    return(
        <Container id={props.id} maxWidth={false} sx={{bgcolor:props.color, color:props.textColor, p:3}}>
            <Typography component="h1" variant="h3" sx={{fontFamily: 'monospace'}} >{props.title}</Typography>
            {props.children}
        </Container>
    )
}

export default Section;
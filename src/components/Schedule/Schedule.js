import React from 'react'

import { VerticalTimelineElement }  from 'react-vertical-timeline-component'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        marginBottom: "100px!important"
    },
    a: {
        textDecoration: "none"
    },
    image: {
        borderRadius: "6px"
        
    }
})

function Schedule({id, date, gr_name, gr_img, gr_link, text, pl_name, pl_link}) {
    const classes = useStyles()
    
    return (
        <div>
            
            <VerticalTimelineElement
                id="debug"
                className = {`vertical-timeline-element--work ${classes.root}`}
                contentStyle = {{ background: '#ffffff', color: '#000', boxShadow: "0px 0px 6px 3px lightblue"}}
                contentArrowStyle = {{ borderRight: '7px solid lightblue ' }}
                iconStyle = {{ background: 'lightblue'}}
                position = {id%2 !== 0 ? "left" : "right"}
                >
                <h1 
                    className = "vertical-timeline-element-title">
                    Το συγκρότημα {gr_name}
                </h1>
                <h4>Στις {date}</h4>
                <img src = {gr_img} alt="group"/>
                <p>{text}</p>
                <br/>
                <a 
                    className = {classes.a}
                    href = {gr_link}>
                    Η σελίδα του συγκροτήματος
                </a>
                <br/>
                <br/>
                <h2 className = "vertical-timeline-element-title">Στο μαγαζί {pl_name}</h2>
                <br/>
                <a 
                    className = {classes.a}
                    href = {pl_link}>
                    Η σελίδα του μαγαζιού
                </a>
            </VerticalTimelineElement>
        </div>
    )
}

export default Schedule
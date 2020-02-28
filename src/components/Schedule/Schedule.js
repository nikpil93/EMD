import React from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component'


function Schedule({id, date, gr_name, gr_img, gr_link, text, pl_name, pl_link}) {

    return (
        
        <div>
            
            <VerticalTimelineElement
                className = "vertical-timeline-element--work"
                contentStyle = {{ background: 'rgb(220,220,220)', color: '#fff' }}
                contentArrowStyle = {{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date = {date}
                iconStyle = {{ background: 'rgb(128,128,128)', color: '#fff' }}
                position = {id%2 !== 0 ? "left" : "right"}
                >
                <h1 className = "vertical-timeline-element-title">Το συγκρότημα {gr_name}</h1>
                <img src = {gr_img} alt="group"/>
                <p>{text}</p>
                <a href = {gr_link}>Η Σελίδα του συγκροτήματος</a>
                <br/>
                <br/>
                <h1 className = "vertical-timeline-element-title">Στο μαγαζί {pl_name}</h1>
                <a href = {pl_link}>Η σελίδα του μαγαζιού</a>
            </VerticalTimelineElement>
        </div>
    )
}

export default Schedule
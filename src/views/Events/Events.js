import React, { useState,  useEffect } from 'react'

import { VerticalTimeline }  from 'react-vertical-timeline-component';

import {fetchSchedule} from '../../axios/Axios'

import Schedule from '../../components/Schedule/Schedule'
import Layout from '../../components/Layout/Layout'
import 'react-vertical-timeline-component/style.min.css';


function Events() {
    const [scheduleState, setScheduleState] = useState({schedule: []})

    useEffect(() => {
        const scheduleRetrieve = async () => {
            //gia ton loader edw
            const scheduleData = await fetchSchedule()
            return setScheduleState({
            schedule : scheduleData
           })        
        }
        scheduleRetrieve()
    }, [])
    
    return (
        <Layout>
            <VerticalTimeline>
                {scheduleState.schedule.map(item => (
                <Schedule
                    id={item.id}
                    date={item.date}
                    gr_name={item.gr_name}
                    gr_img={item.gr_img}
                    gr_link={item.gr_link}
                    text={item.text}
                    pl_name={item.pl_name}
                    pl_link={item.pl_link}            
                />
                ))}
            </VerticalTimeline>
        </Layout>
    )
}

export default Events



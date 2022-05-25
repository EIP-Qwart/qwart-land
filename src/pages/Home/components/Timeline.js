import React, {useEffect, useState} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent} from "@mui/lab";
import HotelIcon from '@mui/icons-material/Hotel';
import {Typography} from "@material-ui/core";

const MyTimelineItem = (props) => {
    const {content} = props
    const {oppositeContent} = props
    const {color} = props
    const {connector} = props
    const [state, setState] = useState ({})
    const [con, setCon] = useState ()

    useEffect(()=>{
        if (color && color === true)
            setState({bgcolor: 'secondary.main'})
    }, [])


    return (
        <div>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="h6" style={{fontSize:"20px"}}>
                        {oppositeContent}
                    </Typography>
                </TimelineOppositeContent>
                    <TimelineSeparator >
                        <TimelineDot sx={state}/>
                        <TimelineConnector sx={state}/>

                    </TimelineSeparator >
                <TimelineContent>
                    <Typography variant="h6" style={{fontSize:"20px"}}>
                        {content}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </div>
    );
};


const TimelineSection = () => {
    return (
        <section>
            <div className="presentation-section">
                <div>
                    <Timeline position="alternate">
                        <MyTimelineItem
                            oppositeContent={"01/09/2020"}
                            content={"Création de l'équipe"}
                            color={true}
                            connector={true}
                        />
                        <MyTimelineItem
                            oppositeContent={"05/07/2021"}
                            content={"Test & Learn"}
                            color={true}
                            connector={true}
                        />
                        <MyTimelineItem
                            oppositeContent={"27/10/2021"}
                            content={"Management & Processes"}
                            connector={true}
                            color={true}
                        />
                        <MyTimelineItem
                            oppositeContent={"24/01/2022"}
                            content={"Fast Forward"}
                            color={true}
                            connector={true}
                        />
                        <MyTimelineItem
                            oppositeContent={"25/05/2022"}
                            content={"Beta & Grow Hacking"}
                            color={true}
                            connector={true}
                        />
                        <MyTimelineItem
                            oppositeContent={"Bientôt"}
                            content={"Consolidation"}
                            color={false}
                            connector={false}
                        />
                    </Timeline>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
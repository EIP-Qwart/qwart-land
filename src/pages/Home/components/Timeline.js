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


const TimelineSection = ({t}) => {
    return (
        <section>
            <div className="presentation-section">
                <div>
                    <Timeline position="alternate">
                        <MyTimelineItem
                            oppositeContent={t('date1')}
                            content={t('content1')}
                            color={true}
                            connector={true}
                        />
                        <MyTimelineItem
                            oppositeContent={t('date2')}
                            content={t('content2')}
                            color={true}
                            connector={true}
                        />
                        <MyTimelineItem
                            oppositeContent={t('date3')}
                            content={t('content3')}
                            connector={true}
                            color={true}
                        />
                        <MyTimelineItem
                            oppositeContent={t('date4')}
                            content={t('content4')}
                            color={true}
                            connector={true}
                        />
                        <MyTimelineItem
                            oppositeContent={t('date5')}
                            content={t('content5')}
                            color={true}
                            connector={true}
                        />
                        <MyTimelineItem
                            oppositeContent={t('date6')}
                            content={t('content6')}
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
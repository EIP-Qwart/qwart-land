import React, {useEffect, useState} from 'react';
import {
    Animator,
    batch,
    Move,
    Sticky,
    Fade,
} from "react-scroll-motion";


const themeText = [
    batch(Fade(), Sticky(35,23), Move(400,0, -100,0)),
    
    
    batch(Fade(), Sticky(69,81), Move(0,200, 0,-150)),
    
    batch(Fade(), Sticky(35,23), Move(350,0, -700,0))
];

const themeImage = [
    batch(Fade(), Sticky(64, 64), Move(-100,0, 400,0)),
    
    
    batch(Fade(), Sticky(35, 39), Move(0,270, 0,-220)),
    
    
    batch(Fade(), Sticky(73, 64), Move(200,0, -500,0))
];


const SectionDetails = (props) => {
    const {text} = props;
    const {img} = props;
    const {themer} = props;
    
    return (
        <section>
            <div className="sectionDetail">
                <Animator animation={themeText[themer]}>
                    <div className={"sectionDetailTextContainer"}>
                            <p className={"sectionDetailText"}>
                                {text}
                            </p>
                    </div>
                </Animator>
    
                <Animator animation={themeImage[themer]}>
                    <div className={"sectionDetailImageContainer"}>
                        <img src={img} className={"sectionDetailImage"}/>
                    </div>
                </Animator>
            </div>
        </section>
    );
};

export default SectionDetails;
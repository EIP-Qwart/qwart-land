import React from 'react';
import {Animator, batch, FadeIn, Fade, FadeOut, MoveIn, MoveOut, Move, Sticky} from "react-scroll-motion";

const SectionTeaser = (props) => {
    const {title} = props;
    const {description} = props;
    const animation = batch(Fade(), MoveIn(), MoveOut(0, -400), Sticky())
    
    return (
        <section className={"section-1"}>
                <div className="presentation-section" >
                    {title ?? (<p className={"section-description"}>{title}</p>)}
                    <h1 className={"section-title"}>{description}</h1>
                </div>
        </section>
    );
};

export default SectionTeaser;
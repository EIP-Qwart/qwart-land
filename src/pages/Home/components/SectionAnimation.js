import React, {useEffect, useState} from 'react';
import {Animator, ScrollPage} from "react-scroll-motion";

const SectionAnimation = (props) => {
    const [page, setPage] = useState(0)
    const [animation, setAnimation] = useState(null)
    
    useEffect(() => {
        if (props.page)
            setPage(props.page)
        if (props.animation)
            setAnimation(props.animation)
    }, [])
    
    
    const animManager = () => {
        if (animation) {
            return (
                <Animator animation={animation}>
                    {props.children}
                </Animator>);
        } else {
            return (props.children);
        }
    }
    
    return (
        <ScrollPage page={page}>
            {animManager()}
        </ScrollPage>
    );
};

export default SectionAnimation;
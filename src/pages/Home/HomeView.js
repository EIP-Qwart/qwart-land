import Footer from "./components/Footer";
import {
    batch,
    Move, MoveOut,
    ScrollContainer,
    Sticky,
    Fade,
    MoveIn, StickyIn, StickyOut, FadeIn, FadeOut, Animator,
} from "react-scroll-motion";
import LandSection from "./components/LandSection";
import FeatureFour from "./components/FeatureFour";
import React, {useState} from "react";
import SectionAnimation from "./components/SectionAnimation";
import SectionTeaser from "./components/SectionTeaser";
import SectionDetails from "./components/SectionDetails";
import Timeline from "./components/Timeline";
import TimelineSection from "./components/Timeline";
import Team from "./components/Team";

//const FadeDemo = batch(Fade(), Sticky(), MoveIn(0,100), MoveOut(0,-100))
const FadeTease =  batch(Sticky(), MoveIn(0,100), MoveOut(0,-1000))
const FadeUp = batch(Fade(), MoveIn(), MoveOut(0, -400), Sticky());

//const FadeDetail = batch(Fade(), Sticky(), MoveIn(-100,0), MoveOut(0,-100))
const SpaceCorrection = batch(Fade(), Sticky(), Move(0,0,0,0))

const HomeView = ({t}) => {

    const increment = (function (n) {
        return function () {
            n += 1;
            return n;
        }
    }(-1));

    const fixer = (nbr) => (
            <SectionAnimation page={nbr} animation={SpaceCorrection}>
                <div className={"correction-section"}></div>
            </SectionAnimation>
        )

    return (
        <div className={"home"}>
            <>
                <ScrollContainer>
                    <SectionAnimation page={increment()}>
                            <LandSection t={t}/>
                    </SectionAnimation>

                    {fixer(increment())}

                    <div id={"idFix1"}></div>
                    <SectionAnimation page={increment()} animation={FadeUp}>
                        <SectionTeaser
                            title={t('sonetitle')}
                            description={t('s_one_description')}
                        />
                    </SectionAnimation>

                    <SectionAnimation page={increment()} id={"test2"} >
                        <SectionDetails
                            text={t('s_one_text')}
                            t={t}
                            themeIdx={0}
                            img={"eyo.png"}
                        />
                    </SectionAnimation>

                    {fixer(increment())}

                    <div id={"idFix2"}></div>

                    <SectionAnimation page={increment()} animation={FadeUp} id={"test3"}>
                        <SectionTeaser id="timeline"
                            description={"Timeline"}
                        />
                    </SectionAnimation>

                    <SectionAnimation page={increment()} >
                        <TimelineSection/>
                    </SectionAnimation>

                    {fixer(increment())}

                    <div id={"idFix3"}></div>
                    <SectionAnimation page={increment()} animation={FadeUp}>
                        <SectionTeaser
                            description={"Notre Equipe"}
                        />
                    </SectionAnimation>

                    <SectionAnimation page={increment()} >
                        <Team/>
                    </SectionAnimation>

                    {fixer(increment())}

                    <div id={"idFix4"}></div>
                    <SectionAnimation page={increment()} animation={FadeUp}>
                        <SectionTeaser
                            title={t('s_question')}
                            description={'meyrueis.de-jurquet@epitech.eu'}
                        />
                    </SectionAnimation>
                    {fixer(increment())}

                    <SectionAnimation page={increment()} animation={FadeTease}>
                            <FeatureFour t={t}/>
                    </SectionAnimation>
                    <Footer/>
                </ScrollContainer>
            </>
        </div>
    );
};
 
export default HomeView;
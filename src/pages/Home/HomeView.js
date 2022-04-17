import Footer from "./components/Footer";
import {
    batch,
    Move, MoveOut,
    ScrollContainer,
    Sticky,
    Fade,
    MoveIn,
} from "react-scroll-motion";
import LandSection from "./components/LandSection";
import FeatureFour from "./components/FeatureFour";
import React from "react";
import SectionAnimation from "./components/SectionAnimation";
import SectionTeaser from "./components/SectionTeaser";
import SectionDetails from "./components/SectionDetails";

//const FadeDemo = batch(Fade(), Sticky(), MoveIn(0,100), MoveOut(0,-100))
const FadeTease =  batch(Sticky(), MoveIn(0,100), MoveOut(0,-1000))
//const FadeDetail = batch(Fade(), Sticky(), MoveIn(-100,0), MoveOut(0,-100))
const SpaceCorrection = batch(Fade(), Sticky(), Move(0,0,0,0))

const HomeView = ({t}) => {
    
    return (
        <div className={"home"}>
            <>
                <ScrollContainer>
                    
                    <SectionAnimation page={0}>
                            <LandSection t={t}/>
                    </SectionAnimation>
                    <SectionAnimation page={1} animation={SpaceCorrection}><div className={"correction-section"}></div></SectionAnimation>
                    
                    <SectionAnimation page={2} animation={FadeTease}>
                        <SectionTeaser
                            title={t('sonetitle')}
                            description={t('s_one_description')}
                        />
                    </SectionAnimation>
                    <SectionAnimation page={3} animation={SpaceCorrection}><div className={"correction-section"}></div></SectionAnimation>
                    
                    <SectionAnimation page={4} >
                        <SectionDetails
                            text={t('s_one_text')}
                            themer={0}
                            img={"eyo.png"}
                        />
                    </SectionAnimation>
                    <SectionAnimation page={6} animation={SpaceCorrection}><div className={"correction-section"}></div></SectionAnimation>
    
    
                    
                    
                    <SectionAnimation page={7} animation={FadeTease}>
                            <FeatureFour t={t}/>
                    </SectionAnimation>
                    
                    <Footer/>
                </ScrollContainer>
            </>
        </div>
    );
};
 
export default HomeView;
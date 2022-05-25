import React, {useEffect, useState} from 'react';
import {
    Animator,
    batch,
    Move,
    Sticky,
    Fade, ZoomIn, StickyIn,FadeIn,
} from "react-scroll-motion";

const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const ph1 = "Qwart est une plateforme en ligne dédiée aux artistes numériques. Elle a pour but de permettre la Gestion de versions, le Stockage et le Téléchargement de vos projets artistiques."
const ph2 = "En tant qu'artiste, vous pourrez accèder à vos projets où que vous soyez dans le monde, au format de l'éditeur (.psd, .ai ...). Notre solution vous permettra directement, à partir de votre navigateur, de visionner votre projet."
const ph3 = "Notre système de version, vous permettra, à vous et à vos collaborateur, de récupérer une étape antérieure, qui aurait écrasé lors de la réalisation de votre projet."
const ph4 = "Notre beta est désormais dispobile et nous encourageons à l'utiliser dès à présent. Nous vous laissons vous faire un avis sur la plateforme et nous espérons que vous nous partagerez cet avis."

const themeText = [
    batch(Fade(), Sticky(31,20), Move(-100,0, 400,0)),

    batch(Fade(), Sticky(25, 39), Move(-100,0, 400,0)),

    batch(Fade(), Sticky(25, 59), Move(-100,0, 400,0)),

    batch(Fade(), Sticky(31, 80), Move(-100,0, 400,0)),


    batch(StickyIn(), FadeIn(), ZoomIn()),
];

const themeImage = [
    batch(Fade(), Sticky(78, 48), Move(400,0, -100,0)),

    
    batch(Fade(), Sticky(200, 200), Move(0,270, 0,-220)),
    
    
    batch(Fade(), Sticky(73, 64), Move(200,0, -500,0))
];


const SectionDetails = (props) => {
    const {text} = props;
    const {img} = props;
    const themeIdx = 0;

    return (
        <section>
            <div className="sectionDetail">
                <Animator animation={themeText[themeIdx]}>
                    <div className={"sectionDetailTextContainer"}>
                            <p className={"sectionDetailText"}>
                                {ph1}
                            </p>
                    </div>
                </Animator>

                <Animator animation={themeText[1]}>
                    <div className={"sectionDetailTextContainer"}>
                        <p className={"sectionDetailText"}>
                            {ph2}
                        </p>
                    </div>
                </Animator>

                <Animator animation={themeText[2]}>
                    <div className={"sectionDetailTextContainer"}>
                        <p className={"sectionDetailText"}>
                            {ph3}
                        </p>
                    </div>
                </Animator>

                <Animator animation={themeText[3]}>
                    <div className={"sectionDetailTextContainer"}>
                        <p className={"sectionDetailText"}>
                            {ph4}
                        </p>
                    </div>
                </Animator>
    
                <Animator animation={themeImage[themeIdx]}>
                    <div className={"sectionDetailImageContainer"}>
                        <img src={img} className={"sectionDetailImage"}/>
                    </div>
                </Animator>
            </div>
        </section>
    );
};


export default SectionDetails;
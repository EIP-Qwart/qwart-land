import React from 'react';

const PresentationSection = () => {
    
    const demoGIF = "https://i.giphy.com/media/cDtdlPuIGC4UovtVyz/giphy.gif"
    
    return (
        <section>
            <div className="presentation-section">
                <h1 className={"section-title"}>Simple and Efficient, Adopt Qwart</h1>
                <p className={"description"}>
                    Easily create and publish visual content. And work in Team for amazing results.
                </p>
                <img src={demoGIF} className={"demo"}></img>
            </div>
        </section>
    );
};

export default PresentationSection;
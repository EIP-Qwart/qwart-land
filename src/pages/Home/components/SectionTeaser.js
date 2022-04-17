import React from 'react';

const SectionTeaser = (props) => {
    const {title} = props;
    const {description} = props;
    
    return (
        <section className={"section-1"}>
            <div className="presentation-section">
                <p className={"section-description"}>{title}</p>
                <h1 className={"section-title"}>{description}</h1>
            </div>
        </section>
    );
};

export default SectionTeaser;
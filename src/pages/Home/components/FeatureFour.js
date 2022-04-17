import React from 'react';
import {Button} from "@material-ui/core";

const FeatureFour = ({t}) => {
    return (
        <section>
            <div className="presentation-section">
                <p className={"name-Qwart"}>Qwart</p>
                <h1 className={"section-title"}>{t('footer_description')}</h1>
                <Button href="google.com" className={"get_started_button"} variant="contained">{t('landSectionBTNStart')}</Button>
            </div>
        </section>
    );
};

export default FeatureFour;
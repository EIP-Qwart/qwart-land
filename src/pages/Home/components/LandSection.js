import React, {useEffect, useState} from 'react';
import facebookLogo from "../../../assets/socialMediaLogo/facebookLogo.png"
import twitterLogo from "../../../assets/socialMediaLogo/twitterLogo.png"
import instagramLogo from "../../../assets/socialMediaLogo/instagramLogo.png"
import {Button, Collapse, IconButton} from "@material-ui/core";
import {Dropdown} from "react-bootstrap";
import i18next from "i18next";
import cookies from 'js-cookie'
import {NavLink, useHistory} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "locomotive-scroll/src/scripts/Main";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className="bi bi-globe"
        viewBox="0 0 16 16"
    >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
)

const language = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr',
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
]


const LanguageWidget = () => {
    
    const getLanguage = () => {
        if (i18next.language)
            return (i18next.language.toUpperCase())
        return ("EN")
    }


    return (
        <Dropdown className={"dropdownLang"}>
            <Dropdown.Toggle style={{background: "white", color: "#3b3b3b", border: "none"}}
                             className={"languageWidgetToggle"} variant="success" id="dropdown-basic">
                {getLanguage()}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{width: "30px"}}>
                {language.map(({ code, name, country_code }) => (
                    <Dropdown.Item onClick={() => {
                        i18next.changeLanguage(code)
                    }}>
                        <div>{name}</div>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

const Navbar = ({t}) => {
    const navList = document.getElementById("nav-lists");

    
    const MainNavBar =
        <div className={"barItemPressed"}>
            <div className="bar-section-1">
                <NavLink className={"navlogo"}  to={"/"}  >Qwart</NavLink>
                <a className={"checkBtn"}>{"X"}</a>
            </div>
            
            <div className="bar-section-2">
                <LanguageWidget/>
                <div className={"bar-section-NavLink"}>
                    <Scroll activeClass="active" smooth={true} to={"idFix1"}>
                        <a className={"navBarLink"} style={{ textDecoration: 'none' }} href="#projet">{t("navbarProjet")}</a>
                    </Scroll>
                    <Scroll activeClass="active" smooth={true} to={"idFix2"}>
                        <a className={"navBarLink"} style={{ textDecoration: 'none' }} href="#timeline"  >{t("navbarTimeline")}</a>
                    </Scroll>
                    <Scroll activeClass="active" smooth={true} to={"idFix3"}>
                        <a className={"navBarLink"} style={{ textDecoration: 'none' }}  href="#team"  >{t("navbarTeam")}</a>
                    </Scroll>
                    <Scroll activeClass="active" smooth={true} to={"idFix4"}>
                        <a className={"navBarLink"} style={{ textDecoration: 'none' }} href="#contact" >{t("navbarContact")}</a>
                    </Scroll>
                </div>
            </div>
        </div>;
    
    return (MainNavBar)
};

const LandSection = ({t}) => {

    const RouteChange=()=> {
        let path = "/beta";
        let history = useHistory();
        history.push(path);
    }
    const [checked, setChecked] =useState(false)
    useEffect( ()=> {
        setChecked(true)
    })

    return (
        <div>
            <div className={"landSectionContainer"}>
                <div className={"section1"}>
                    <Navbar t={t}/>
                        <div className={"pan"}>
                            <Collapse in={checked} {...(checked ? {timeout: 1000} : {})} collapsedHeight={50}>
                            <h1 className={"title"}>{t('landSectionDescription')}</h1>
                            <h3 className={"description"}>
                                <Button className={"get_started_button"}
                                        target="_blank" rel="noopener noreferrer"
                                        variant="contained"
                                        href="http://app.qwart-studio.fr"
                                        >
                                    {t('landSectionBTNStart')}
                                </Button>
                            </h3>
                            <h3 className={"buttonNextContainer"}>
                                <Scroll activeClass="active" smooth={true} to={"idFix1"}>
                                    <IconButton>
                                        <ExpandMoreIcon className={"buttonNext"}/>
                                    </IconButton>
                                </Scroll>
                            </h3>
                            </Collapse>
                        </div>

                    <div className={"footerBar"}>
                        <div className="LogoContainer">
                            <img src="Logo_Q.png" className={"logo"}/>
                        </div>
                        <div className="socialMediaContainer">
                                <p className="socialMediaText">{t('socialMedia')}:</p>
                            <div className="socialMediaLogo" id={"test"}>
                                <a className="socialMediaLogoLink" href={"#"}><img src={facebookLogo}/></a>
                                <a className="socialMediaLogoLink" href={"#"}><img src={twitterLogo}/></a>
                                <a className="socialMediaLogoLink" href={"#"}><img src={instagramLogo}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandSection;
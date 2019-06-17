import React from 'react';
import "./main.css";
import {data} from "./data.json";
import ScrollableAnchor from 'react-scrollable-anchor';
import MainBlock from "./component/mainBlock/mainBlock";
import OurTeam from "./component/ourTeam/ourTeam";
import Portfolio from "./component/portfolio/portfolio";
import Services from "./component/services/services";
import Footer from "./component/footer/footer";
import LinksNavigation from "./component/linksNavigation";
import Window from "./component/window/window";

class Web extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Window content={data.blocks}/>
                <LinksNavigation contentMenu={data.blocks}/>
                <ScrollableAnchor name="mainBlock" id={'mainBlock'}>
                    <MainBlock contentMenu={data.blocks} content={data.blocks.mainBlock}/>
                </ScrollableAnchor>
                <ScrollableAnchor name="ourTeam" id={'ourTeam'}>
                    <OurTeam content={data.blocks.ourTeam}/>
                </ScrollableAnchor>
                <ScrollableAnchor name="portfolio" id={'portfolio'}>
                    <Portfolio content={data.blocks.portfolio}/>
                </ScrollableAnchor>
                <ScrollableAnchor name="services" id={'services'}>
                    <Services content={data.blocks.services}/>
                </ScrollableAnchor>
                <ScrollableAnchor name="contact" id={'contact'}>
                    <Footer content={data.blocks.contact}/>
                </ScrollableAnchor>
            </React.Fragment>
        )
    }

}

export default Web
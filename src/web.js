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


class Web extends React.Component {

    render() {
        window.onscroll = this.colorLink;
        return (
            <React.Fragment>
                <LinksNavigation contentMenu={data.blocks}/>
                <ScrollableAnchor id={'mainBlock'}>
                    <MainBlock contentMenu={data.blocks} content={data.blocks.mainBlock}/>
                </ScrollableAnchor>
               <ScrollableAnchor id = {'ourTeam'} >
                    <OurTeam content={data.blocks.ourTeam} />
                </ScrollableAnchor>
                <ScrollableAnchor id={'portfolio'}>
                    <Portfolio content={data.blocks.portfolio} />
                </ScrollableAnchor>
                <ScrollableAnchor id = {'services'} >
                    <Services content={data.blocks.services} />
                </ScrollableAnchor>
                <ScrollableAnchor id={'contact'}>
                    <Footer content={data.blocks.contact} />
                </ScrollableAnchor>
            </React.Fragment>
    )
    }

}

export default Web
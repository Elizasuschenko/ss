import React from 'react';
import Slider from "react-slick";
import "./style.scss"


class OurTeam extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.sliderBlocks = this.sliderBlocks.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    sliderBlocks() {
        const itemArr = this.props.content.team.slice();
        const settings = {
            dots: false,
            fade: true,
            speed: 1000,
            infinite: true,
            slidesToShow: 1,
            cssEase: "ease",
            slidesToScroll: 1
        };
        return (
            <Slider {...settings} ref={c => (this.slider = c)} className="our_team-slider">  {itemArr.map((item) => (
                <div className="slid-window">
                    <div className="main-photo">
                        <img src={item.subphoto} alt=""/>
                        <button className="next_slider" onClick={this.next}>{this.props.content.buttonNext}</button>
                    </div>
                    <div className="subphoto">
                        <h4 className="profecion">{item.profession}</h4>
                        <h3 className="name_person">{item.name}</h3>
                        <span className="line_slider"></span>
                        <div className="subphoto-block">
                            <img src={item.photo} alt=""/>
                        </div>
                    </div>
                    <div className="number_slider">
                        <span className="main_number">{item.number}</span>
                        <span className="number_all">/{itemArr.length}</span>
                    </div>
                </div>
                )
            )
            } </Slider>)

    }
    render() {

        return (
            <section className="our_team-block">
                <div className="our_team-container container">
                    <div className="our_team-text">
                        <span className="number_block-our_team">{this.props.content.number}</span>
                        <h1 className="main_title-our_team">{this.props.content.title}</h1>
                        <h2 className="subtitle-our_team">{this.props.content.subtitle}</h2>
                    </div>
                        {this.sliderBlocks()}
                </div>
            </section>
        )
    }

}

export default OurTeam
import React from 'react';
import Slider from "react-slick";
import "./style.scss"


class OurTeam extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    render() {
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
            <section className="our_team-block">
                <div className="our_team-container container">
                    <div className="our_team-text">
                        <span className="number_block-our_team">02.</span>
                        <h1 className="main_title-our_team">Наша команда</h1>
                        <h2 className="subtitle-our_team">Мы — небольшая, но сильная команда дизайнеров, работаем в
                            сфере дизайна с 2010 года.</h2>
                    </div>
                    <Slider {...settings} ref={c => (this.slider = c)} className="our_team-slider">
                        <div className="slid-window" key={1}>
                            <div className="main-photo">
                                <img src="img/photo.svg" alt=""/>
                                <button className="next_slider" onClick={this.next}>Посмотреть еще →</button>
                            </div>
                            <div className="subphoto">
                                <h4 className="profecion">Дизайнер и котик.</h4>
                                <h3 className="name_person">Каменок Яна</h3>
                                <span className="line_slider"></span>
                                <div className="subphoto-block">
                                    <img src="./img/subphoto.svg" alt=""/>
                                </div>
                            </div>
                            <div className="number_slider">
                                <span className="main_number">1</span>
                                <span className="number_all">/09</span>
                            </div>
                        </div>
                        <div className="slid-window" key={2}>
                            <div className="main-photo">
                                <img src="img/photo.svg" alt=""/>
                                <button className="next_slider" onClick={this.next}>Посмотреть еще →</button>
                            </div>
                            <div className="subphoto">
                                <h4 className="profecion">Дизайнер и котик.</h4>
                                <h3 className="name_person">Каменок Яна</h3>
                                <span className="line_slider"></span>
                                <div className="subphoto-block">
                                    <img src="./img/subphoto.svg" alt=""/>
                                </div>
                            </div>
                            <div className="number_slider">
                                <span className="main_number">2</span>
                                <span className="number_all">/09</span>
                            </div>
                        </div>
                        <div className="slid-window" key={3}>
                            <div className="main-photo">
                                <img src="img/photo.svg" alt=""/>
                                <button className="next_slider" onClick={this.next}>Посмотреть еще →</button>
                            </div>
                            <div className="subphoto">
                                <h4 className="profecion">Дизайнер и котик.</h4>
                                <h3 className="name_person">Каменок Яна</h3>
                                <span className="line_slider"></span>
                                <div className="subphoto-block">
                                    <img src="./img/subphoto.svg" alt=""/>
                                </div>
                            </div>
                            <div className="number_slider">
                                <span className="main_number">3</span>
                                <span className="number_all">/09</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }

}

export default OurTeam
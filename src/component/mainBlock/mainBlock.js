import React from 'react';
import "./style.scss";
import Feedback from "../feedback";


class MainBlock extends React.Component {
    constructor(props) {
        super(props)
        this.menuList = this.menuList.bind(this);
    }
    menuList() {
        const items = this.props.contentMenu;
        let itemArr = [];
        for (let key in items) {
            if (items[key].name === undefined) {
                continue
            }
            else {
                let itemAeeChild = [];
                itemAeeChild.name = items[key].name;
                itemAeeChild.link = items[key].link;
                itemArr.push(itemAeeChild)
            }
        }
        return (
            <React.Fragment>  {itemArr.map((item) => (
                    <li className="menu_item" onClick={this.close}><a className="item_link" href={item.link}>{item.name}</a>
                    </li>
                )
            )
            } </React.Fragment>)

    }
    render() {
        return (
            <section className="main_block">
                <div className="main_container container">
                    <header>
                        <div className="logo"><img src="./img/logo_ss.png" alt=""/></div>
                        <div className="navigation">
                                <ul className="nav">
                                    {this.menuList()}
                                </ul>
                            <div className="search"><button className="search_button"><i className="fas fa-search"></i></button></div>
                        </div>
                        <Feedback/>
                    </header>
                    <div className="main-content">
                        <span className="number_block_main">{this.props.content.number}</span>
                        <h1 className="main_title">{this.props.content.title}</h1>
                        <h2 className="subtitle">{this.props.content.subtitle}</h2>
                        <div className="instagram"><a className="instagram_link" href="..."><i className={this.props.content.instagramIcon}></i><span>{this.props.content.instagramText}</span> <span className="instagram_bold">{this.props.content.instagramSpan}</span></a></div>
                        <div className="line"><span className="line_span"> {this.props.content.line}</span></div>
                    </div>
                    <div className="main-block-navigation">
                        <div className="main-block-navigation_item">
                            <a href="#ourTeam">
                                <h4 className="navigation-number">02.</h4>
                                <h3 className="navigation-link-name">Команда</h3>
                                <span className="navigation-text">Кто мы и как мы выглядим.</span>
                            </a>
                        </div>
                        <div className="main-block-navigation_item">
                            <a href="#portfolio">
                                <h4 className="navigation-number">03.</h4>
                                <h3 className="navigation-link-name">Портфолио</h3>
                                <span className="navigation-text">Проекты, которыми мы гордимся.</span>
                            </a>
                        </div>
                        <div className="main-block-navigation_item main-block-navigation_item-white">
                            <a href="#services">
                                <h4 className="navigation-number">04.</h4>
                                <h3 className="navigation-link-name">Услуги</h3>
                                <span className="navigation-text">То, что мы вам предлагаем.</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default MainBlock
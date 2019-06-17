import React from 'react';
import './style.scss';


class Window extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            burgerClick: false
        }
        this.menuList = this.menuList.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        let call = document.querySelector('.call_block');
        call.style.display = "none";
        let menu = document.getElementsByClassName('hamburger_block');
        menu[0].style.display = "none";
        let dark = document.querySelector('.windows');
        dark.classList.remove('showDark')
    }

    menuList() {
        const items = this.props.content;
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
            <section className="windows" id="Dark_line">
                <div className="hamburger_block">
                    <div className="humburger_container container" onClick={this.props.burgerClick}>
                        <div className="close" onClick={this.close}>
                            <span className="humburger_close_line"></span>
                            <span className="humburger_close_line"></span>
                            <span className="humburger_close_line"></span>
                        </div>
                        <div className="hamburger_content">
                            <ul>
                                {this.menuList()}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="call_block container">
                    <div className="close" onClick={this.close}>
                        <span className="humburger_close_line"></span>
                        <span className="humburger_close_line"></span>
                        <span className="humburger_close_line"></span>
                    </div>
                    <div className="call">
                        <form action="">
                            <input type="text" placeholder="Имя" className="call_input"/>
                            <input type="tel" placeholder="Телефон" className="call_input"/>
                            <h3 className="form_title">Когда вам позвонить?</h3>
                            <div className="date">
                                <input type="text" placeholder="25.02"/>
                                <input type="text" placeholder="c 14.00"/>
                                <input type="text" placeholder="до 16.00"/>
                            </div>
                            <input type="submit" value="Отправить"/>
                        </form>
                    </div>
                </div>

            </section>
        )
    }
}

export default Window
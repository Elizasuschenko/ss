import React from 'react';
import "./style.scss"


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.items = this.items.bind(this);
    }

    items() {
        const items = this.props.content.items;
        let itemArr = items.slice();
        return (
            <React.Fragment>  {itemArr.map((item) => (
                <a className="contacts-item" href={item.href}>
                    <i className={item.icon}></i>
                    <span>{item.content}</span>
                </a>
                )
            )
            } </React.Fragment>)

    }
    render() {
        return (
            <footer className="content_block" id="footer">
                <div className="container footer_container">
                    <h3 className="footer-number">{this.props.content.number}</h3>
                    <h2 className="footer-title">{this.props.content.title}</h2>
                    <div className="contacts">
                        {this.items()}
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer
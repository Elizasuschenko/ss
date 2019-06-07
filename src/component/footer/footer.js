import React from 'react';
import "./style.scss"


class Footer extends React.Component {
    render() {
        return (
            <footer className="content_block" id="footer">
                <div className="container footer_container">
                    <h3 className="footer-number">05.</h3>
                    <h2 className="footer-title">Контакты</h2>
                    <div className="contacts">
                        <div className="contacts-item">
                            <img src="" alt=""/>
                            <span></span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer
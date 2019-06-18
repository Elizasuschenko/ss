import React from 'react';
import "./style.scss"


class Services extends React.Component {
    constructor(props) {
        super(props)
        this.call = this.call.bind(this)
        this.showDarkLine = this.showDarkLine.bind(this)
        this.item = this.item.bind(this);
    }
    showDarkLine() {
        let dark = document.querySelector('.windows');
        dark.classList.add('showDark')
    }

    call() {
        let call = document.querySelector('.call_block');
        call.style.display = "block";
        this.showDarkLine()
    }
    item() {
        const items = this.props.content.item.slice();
        return (
            <React.Fragment>  {items.map((item) => (
                <div className="services-item">
                    <h3 className="services-item-title">{item.title}</h3>
                    <p className="services-item-text">{item.content}</p>
                    <div className="serviced-item-block">
                        <img src={item.img} alt=""/>
                        <div className="price">
                            {item.price}
                        </div>
                    </div>
                </div>
                )
            )
            } </React.Fragment>)

    }
    render() {
        return (
            <section className="services_block">
                <div className="services_container container">
                    <div className="services-header">
                        <div className="services_header_text">
                            <span className="number_block-services">{this.props.content.number}</span>
                            <h1 className="main_title-services">{this.props.content.title}</h1>
                            <h2 className="subtitle-services">{this.props.content.subtitle}</h2>
                        </div>
                        <div className="opacity_title">{this.props.content.title}</div>
                    </div>
                    <div className="services-content">
                        {this.item()}
                        <div className="services-item services-item-feedback">
                            <h3 className="services-item-title services-item-title-feedback">{this.props.content.feedback.title}</h3>
                            <p className="services-item-text services-item-text-feedback">{this.props.content.feedback.subtitle}</p>
                            <button onClick={this.call} className="services-item-button-feedback">
                                {this.props.content.feedback.button}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Services
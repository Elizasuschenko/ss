import React from 'react';
import "./style.scss"


class Services extends React.Component {
    render() {
        return (
            <section className="services_block">
                <div className="services_container container">
                    <div className="services-header">
                        <div className="services_header_text">
                            <span className="number_block-services">04.</span>
                            <h1 className="main_title-services">Услуги</h1>
                            <h2 className="subtitle-services">Мы делали продукты для Mastercard, Wargaming, Alfa Bank и другим менее крупных компаниий.</h2>
                        </div>
                        <div className="opacity_title">Услуги</div>
                    </div>
                    <div className="services-content">
                        <div className="services-item">
                            <h3 className="services-item-title">Упаковка «Под ключ»</h3>
                            <p className="services-item-text">Заказывать упаковку «под ключ» гораздо выгоднее, ведь таким образом вы экотомите $100. В пакет входят все вышеперечисленные позиции.</p>
                            <div className="serviced-item-block">
                                <img src="" alt=""/>
                                <div className="price">
                                    $500
                                </div>
                            </div>
                        </div>
                        <div className="services-item services-item-feedback">
                            <h3 className="services-item-title services-item-title-feedback">Готовы работать?</h3>
                            <p className="services-item-text services-item-text-feedback">Напишите нам свои контактные данные и наш менеджер свяжется с вами в ближайшее время.</p>
                            <button className="services-item-button-feedback">
                                Связаться с нами  →
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Services
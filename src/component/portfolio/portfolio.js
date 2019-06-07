import React from 'react';
import "./style.scss"


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: this.props.content.works
        }
        this.addItems = this.addItems.bind(this);
        this.menuList = this.menuList.bind(this);
    }
    menuList(itemArr) {
        return (
            <React.Fragment>
                {itemArr.map((items) => (

                        <div className="grid-container"> {items.map((item) => (

                                <div className="portfolio-item"> {item.name} </div>
                            )
                        )
                        } </div>)
                    )
                }

            </React.Fragment>)

    }
    addItems() {
        let size = 0;
        for (let key in this.state.portfolio) {
            if (this.state.portfolio.hasOwnProperty(key)) size++;
        }
        console.log(size);
        let arr = [];
        let allArr = [];
        for(let i = 0; i<size; i++){
            let b = {};
            b.name = i;
            arr.push(b);
            if(arr.length === 6){
                allArr.push(arr);
                arr = [];
            }
        }
        allArr.push(arr);
        return this.menuList(allArr);
    }
    render() {
        console.log(this.state.portfolio)
        return (
            <section className="portfolio-block">
                <div className="container portfolio_container">
                    <div className="portfolio-header">
                        <div className="portfolio_category">
                            <ul className="portfolio_category-ul">
                                <li className="portfolio_category-item active">111</li>
                                <li className="portfolio_category-item">222</li>
                                <li className="portfolio_category-item">333</li>
                                <li className="portfolio_category-item">444</li>
                            </ul>
                        </div>
                        <div className="portfolio_header_text">
                            <span className="number_block-portfolio">03.</span>
                            <h1 className="main_title-portfolio">Портфолио</h1>
                            <h2 className="subtitle-portfolio">Мы делали продукты для Mastercard, Wargaming, Alfa Bank и другич менее крупных компаниий.</h2>
                        </div>
                    </div>
                    <div className="portfolio-grid">
                        {this.addItems()}
                    </div>
                </div>
            </section>
        )
    }

}

export default Portfolio
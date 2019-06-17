import React from 'react';
import "./style.scss"


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: this.props.content.works,
            filter:  [],
            add: false
        }
        this.addItems = this.addItems.bind(this);
        this.menuList = this.menuList.bind(this);
        this.addFilter = this.addFilter.bind(this);
    }
    addFilter(){
        if(this.state.add === false){
            this.addItems('all');
            return this.setState({add: true})
        }
        return false

    }
    menuList() {
        let itemArr = this.state.filter.slice();

        return (
            <React.Fragment>
                {itemArr.map((items) => (

                    <div className="grid-container"> {items.map((item) => (

                            <div className="portfolio-item"><img src={item.url} alt=""/> </div>
                        )
                    )
                    } </div>)
                )
                }

            </React.Fragment>)

    }
    addItems(className) {
        let nameKey = className;
        let mainArray = [];
        for (let key in this.state.portfolio) {
            let namesClass = this.state.portfolio[key].className.slice();
            namesClass = namesClass.split(' ');
            for(let i = 0; i<namesClass.length; i++){
                if(namesClass[i] === nameKey){
                    mainArray.push(this.state.portfolio[key])
                }
            }
        }
        let arr = [];
        let allArr = [];
        let lengthBlock;
        if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1280){
            lengthBlock = 7;
        }
        else{
            lengthBlock = 6;
        }
        for(let i = 0; i<mainArray.length; i++){
            let b = {};
            b.url = mainArray[i].url;
            arr.push(b);
            if(arr.length === lengthBlock){
                allArr.push(arr);
                arr = [];
            }
        }
        allArr.push(arr);
        return this.setState({filter: allArr});

    }
    render() {
        this.addFilter();
        return (
            <section className="portfolio-block">
                <div className="container portfolio_container">
                    <div className="portfolio-header">
                        <div className="portfolio_category">
                            <ul className="portfolio_category-ul">
                                <li className="portfolio_category-item active"><button className="filter-button" onClick={() => this.addItems('logo')}>Логотипы</button></li>
                                <li className="portfolio_category-item"><button className="filter-button" onClick={() =>this.addItems('style')}>Фирменный стиль</button></li>
                                <li className="portfolio_category-item"><button className="filter-button" onClick={() =>this.addItems('instagram')}>Оформление инстаграм</button></li>
                                <li className="portfolio_category-item"><button className="filter-button" onClick={() =>this.addItems('web')}>Разработка сайтов</button></li>
                            </ul>
                        </div>
                        <div className="portfolio_header_text">
                            <span className="number_block-portfolio">03.</span>
                            <h1 className="main_title-portfolio">Портфолио</h1>
                            <h2 className="subtitle-portfolio">Мы делали продукты для Mastercard, Wargaming, Alfa Bank и другич менее крупных компаниий.</h2>
                        </div>
                    </div>
                    <div className="portfolio-grid">
                        {this.menuList()}
                    </div>
                </div>
            </section>
        )
    }

}

export default Portfolio
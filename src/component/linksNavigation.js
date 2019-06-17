import React from 'react';
import "../main.css"


class LinksNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuBlocks: '',
            infoTop: '',
            add: true
        };
        this.info = this.info.bind(this);
        this.menuList = this.menuList.bind(this);
        this.colorLink = this.colorLink.bind(this);
        this.active = this.active.bind(this);
    }
    menuList() {
        const items = this.state.infoTop;
        let itemArr = [];
        for (let key in items) {
            if (items[key].number === undefined) {
                continue
            }

            else {
                let itemAeeChild = [];
                itemAeeChild.number = items[key].number;
                itemAeeChild.link = items[key].link;
                itemAeeChild.className = items[key].class
                itemArr.push(itemAeeChild)
            }
        }
        return (
            <React.Fragment> {itemArr.map((item) => (
                    <li><a className={item.className} href={item.link}>{item.number}</a>
                    </li>
                )
            )
            } </React.Fragment>)

    }
    active(){
        let element = this.state.infoTop.slice();
        for(let i = 0; i < element.length; i++){
            if(element[i].class === 'column_link active'){

            }
        }
    }
    colorLink() {
        let vertex = document.documentElement.scrollTop;
        let old = 0;
        let next = 0;
        let array =  this.state.infoTop.slice();
        let menuArr = document.querySelectorAll(".column_link");
        for (let j = 0; j < array.length; j++) {
            array[j].class = 'column_link'
        }
        for (let i = 0; i < array.length; i++) {
            if (i + 1 >= array.length) {
                return false
            }
            next = array[i + 1].top;
            if (vertex >= old && vertex < next - (document.documentElement.clientHeight * 0.3)) {
                for (let j = 0; j < menuArr.length; j++) {
                    let href = menuArr[j].getAttribute('href');
                    if (href === array[i].name) {
                        array[i].class = 'column_link active';
                        console.log(array)
                        break
                    }
                }
                old = next;
                break
            }
            else if (window.pageYOffset > array[array.length - 1].top - 300) {
                array[array.length - 1].class = 'column_link active'
                break
            }
            console.log(this.state.infoTop)
        }
        return this.setState({infoTop: array})
    }
    info() {

        let items = [];
        const mainArr = this.props.contentMenu;
        for (let key in mainArr) {
            let block = document.querySelector('.' + mainArr[key].class);
            let object = {};
            object.top = block.offsetTop;
            object.name = mainArr[key].link;
            object.link = mainArr[key].link;
            object.number = mainArr[key].number;
            object.class = 'column_link ';
            items.push(object);
        }
        let array = items.slice();
        if (this.state.add === true) {
            array[0].class = 'column_link active';
        }
        console.log(array)
        return this.setState({infoTop: array, add: false});
    }
    render() {
        window.addEventListener('scroll', this.colorLink)
        window.addEventListener('load', this.info)
        return (
            <React.Fragment>
            <nav>
                <ul className="menu_column">
                    {this.menuList()}

                </ul>

            </nav>
            </React.Fragment>
        )
    }


}

export default LinksNavigation
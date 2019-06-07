import React from 'react';
import "../main.css"


class LinksNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoTop: '',
            add: true
        };
        this.menuList = this.menuList.bind(this);
        this.info = this.info.bind(this);
        this.colorLink = this.colorLink.bind(this);
        this.add = this.add.bind(this);
    }
    add(){
        if(this.state.add === true){
            setTimeout(()=>{
                let menuArr = document.querySelectorAll(".column_link");
                menuArr[0].classList.add('active')
            }, 100)
            return this.setState({add: false})
        }

        return false

    }
    info() {

        let items = [];
        const mainArr = this.props.contentMenu;
        for (let key in mainArr) {
            let block = document.querySelector('.' + mainArr[key].class);
            let object = {};
            object.top = block.offsetTop;
            object.name = mainArr[key].link;
            items.push(object);
        }

        return this.setState({infoTop: items});
    }

    menuList() {
        const items = this.props.contentMenu;
        let itemArr = [];

        for (let key in items) {
            if (items[key].number === undefined) {
                continue
            }

            else {
                let itemAeeChild = [];
                itemAeeChild.number = items[key].number;
                itemAeeChild.link = items[key].link;
                itemArr.push(itemAeeChild)
            }

        }

        return (
            <React.Fragment> {itemArr.map((item) => (

                    <li><a className="column_link" href={item.link}>{item.number}</a>
                    </li>
                )
            )
            } </React.Fragment>)

    }

    colorLink() {
        this.info();
        let vertex = document.documentElement.scrollTop;
        let old = 0;
        let next = 0;
        let menuArr = document.querySelectorAll(".column_link");
        for (let j = 0; j < menuArr.length; j++) {
            menuArr[j].classList.remove('active');
        }
        for (let i = 0; i < this.state.infoTop.length; i++) {
            if (i + 1 >= this.state.infoTop.length) {
                return false
            }
            next = this.state.infoTop[i + 1].top;
            if (vertex >= old && vertex < next - (document.documentElement.clientHeight * 0.3)) {
                for (let j = 0; j < menuArr.length; j++) {
                    menuArr[j].classList.remove('active');
                    let href = menuArr[j].getAttribute('href');
                    if (href === this.state.infoTop[i].name) {
                        menuArr[j].classList.add('active');
                        console.log(this.state.infoTop)
                        break
                    }
                }
                old = next;
                break
            }
            else if(window.pageYOffset > this.state.infoTop[this.state.infoTop.length - 1].top- 300){
                menuArr[menuArr.length-1].classList.add('active')
                break
            }

        }

    }

    render() {
        this.add();
        document.onload = this.info;
        window.onscroll = this.colorLink;
        return (
            <nav>
                <ul className="menu_column">
                    {this.menuList()}

                </ul>

            </nav>
        )
    }

}

export default LinksNavigation
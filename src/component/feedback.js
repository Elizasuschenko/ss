import React from 'react';

class Feedback extends React.Component {

    constructor(props) {
        super(props)
        this.menu = this.menu.bind(this);
        this.showDarkLine = this.showDarkLine.bind(this);
        this.call = this.call.bind(this);
    }

    showDarkLine() {
        let dark = document.querySelector('.windows');
        dark.classList.add('showDark')
    }

    menu() {
        let menu = document.getElementsByClassName('hamburger_block');
        menu[0].style.display = "block";
        this.showDarkLine()
    }

    call() {
        let call = document.querySelector('.call_block');
        call.style.display = "block";
        this.showDarkLine()
    }

    render() {
        return (
            <>
                <div className="feedback">
                    <button className="burger_button" onClick={this.menu}>
                        <span className="burger"></span>
                        <span className="burger"></span>
                        <span className="burger"></span>
                    </button>
                </div>

            </>
        )
    }
}

export default Feedback
import React, { Component } from 'react';
import addicon from '../add_icon.svg';

class Header extends Component {
    addTodo = () => {
        let item = document.getElementById("item").value;
        if (item) {
            console.log(item);
        }
    }

    render() {
        return (
            <header>
                <input type="text" placeholder="Enter an activity.." id="item"></input>
                <button onClick={this.addTodo} ><img src={addicon} alt="add" /></button>
            </header>
        );
    }
}

export default Header;

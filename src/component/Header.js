import React, { Component } from 'react'
import {AddIcon} from './SvgIcon'

class Header extends Component {
    state = {
        value: this.props.value || ''
    }

    handleChange = (e) => {
        this.setState({value: e.target.value.trim()})
    }

    clear = () => {
        this.setState({ value: ''})
    }

    addTodoBykeyUp = (e) => {
        let name = this.state.value
        if (e.keyCode === 13 && name) {
            this.props.handleAddTodo(name)
            this.clear()
        }
    }

    addTodoByClick = () => {
        let name = this.state.value
        if (name) {
            this.props.handleAddTodo(name)
            this.clear()
        }
    }

    render() {
        return (
            <header>
                <input
                    id="item"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyUp={this.addTodoBykeyUp}
                    placeholder="Enter an activity.." />

                <button onClick={this.addTodoByClick} >
                    <AddIcon />
                </button>
            </header>
        );
    }
}

export default Header

import React, {Component} from 'react'
import {DelIcon, CompletedIcon} from './SvgIcon';

class TodoList extends Component {

    delTodo = () => {
        this.props.delTodo(this.props.id)
    }

    comTodo = () => {
        this.props.comTodo(this.props.id)
    }

    render() {
        // console.log(this.props)

        return (
                <li>
                    {this.props.value}
                    <div className="buttons">
                    <button className="remove" onClick={this.delTodo}>
                        <DelIcon />
                    </button>
                    <button className="complete" onClick={this.comTodo}>
                        <CompletedIcon />
                    </button>
                    </div>
                </li>
               )
    }
}

export default TodoList

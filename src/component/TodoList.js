import React, {Component} from 'react'
import deleteicon from '../static/remove_icon.svg'
import doneicon from '../static/done_icon.svg'
import ReactSVG from 'react-svg';

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
                        <ReactSVG src={deleteicon} />
                    </button>
                    <button className="complete" onClick={this.comTodo}>
                        <ReactSVG src={doneicon} />
                    </button>
                    </div>
                </li>
               )
    }
}

export default TodoList

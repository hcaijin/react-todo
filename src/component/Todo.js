import React, {Component} from 'react'
import TodoList from './TodoList'

export default class Todo extends Component {

    render() {
        const todo = this.props.todo

        const completedList = []
        const notCompletedList = []
        for (let i = 0; i < todo.length; i++) {
            if (todo[i].isCompleted) {
                completedList.push(todo[i])
            } else {
                notCompletedList.push(todo[i])
            }
        }
        // console.log(completedList)
        // console.log(notCompletedList)

        return (
                <div className="container">
                <ul className="todo" id="todo">
                {
                    notCompletedList.map((item) =>
                    <TodoList
                        comTodo={this.props.comTodo}
                        delTodo={this.props.delTodo}
                        key={item.id}
                        value={item.title}
                        id={item.id} />)
                }
                </ul>
                <ul className="todo" id="completed">
                {
                    completedList.map((item) =>
                    <TodoList
                        comTodo={this.props.comTodo}
                        delTodo={this.props.delTodo}
                        key={item.id}
                        value={item.title}
                        id={item.id} />)
                }
                </ul>
                </div>
               )
    }
}

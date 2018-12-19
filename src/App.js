import React, { Component } from 'react';
import Todo from './component/Todo';
import Header from './component/Header';


class App extends Component {
    state = {
       todoList: []
    }

    componentDidMount() {
        const jsonTodoList = JSON.parse(localStorage.getItem('todo'))
        // console.log(jsonTodoList)
        this.setState({todoList: jsonTodoList || []})
    }

    handleDel = (id) => {
        let todoList = this.state.todoList
        todoList = todoList.filter((task) => {
            return task.id !== id
        })
        // console.log(todoList)
        this.fnSave(todoList)
        this.setState({todoList})
    }

    handleToggle = (id) => {
        let todoList = this.state.todoList
        for (let i in todoList) {
            if (todoList[i].id === id) {
                todoList[i].isCompleted = !todoList[i].isCompleted
                break
            }
        }
        // console.log(todoList)
        this.fnSave(todoList)
        this.setState({todoList})
    }

    handleAddTodo = (task) => {
        if (task) {
            let todoCounter = Math.floor(Math.random() * 9000) + 1000
            let itemObj = {
                id: todoCounter,
                title: task,
                isCompleted: false
            }
            this.state.todoList.unshift(itemObj)
            this.fnSave(this.state.todoList)
            this.setState({todoList: this.state.todoList})
        }
    }

    /**
     * save to localStorage
     */
    fnSave = (todo) => {
        let jTodo = JSON.stringify(todo)
        localStorage.setItem('todo', jTodo)
    }

    render() {
        return (
                <div>
                    <Header
                        handleAddTodo={this.handleAddTodo} />

                    <Todo
                        comTodo={this.handleToggle}
                        delTodo={this.handleDel}
                        todo={this.state.todoList} />
                </div>
               )
    }
}

export default App

import React, { Component } from 'react';
import Todo from './component/Todo';
import addicon from './static/add_icon.svg';
import ReactSVG from 'react-svg';

class App extends Component {
    state = {
       todoList: [
            { id: 1,
              title: "task1",
              isCompleted: false
            },
            { id: 2,
              title: "task2",
              isCompleted: true
            },
            { id: 3,
              title: "task3",
              isCompleted: true
            }
        ]
    }

    addTodo = (itemv) => {
        if (itemv) {
            let todoCounter = Math.floor(Math.random() * 9000) + 1000
            let itemObj = {
                id: todoCounter,
                title: itemv,
                isCompleted: false
            }
            this.state.todoList.unshift(itemObj)
            this.setState({todoList: this.state.todoList})
        }
    }

    handleDel = (id) => {
        let todoList = this.state.todoList
        todoList = todoList.filter((task) => {
            return task.id !== id
        })
        // console.log(todoList)
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
        console.log(todoList)
        this.setState({todoList})
    }

    addTodoBykeyUp = (e) => {
        // console.log(e.keyCode)
        if (e.keyCode === 13) {
            this.addTodo(document.getElementById("item").value.trim())
        }
    }

    addTodoByClick = () => {
        this.addTodo(document.getElementById("item").value.trim())
    }

    render() {
        return (
                <div>
                    <header>
                        <input onKeyUp={this.addTodoBykeyUp} type="text" placeholder="Enter an activity.." id="item"></input>
                        <button onClick={this.addTodoByClick} >
                            <ReactSVG src={addicon} />
                        </button>
                    </header>
                    <Todo
                        comTodo={this.handleToggle}
                        delTodo={this.handleDel}
                        todo={this.state.todoList} />
                </div>
               )
    }
}

export default App

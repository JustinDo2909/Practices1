import React from "react";
import AddNewToDo from './AddNewToDo';
import './style_ToDoList.scss'
import {  toast } from 'react-toastify';

class ToDoList extends React.Component {
    state = {
        todoList: [
            { id: 'job1', name: 'homeWord' },
            { id: 'job2', name: 'Eating' },
            { id: 'job3', name: 'ReadingBook' }
        ]
    }

    addNewList = (job) => {
        // Thêm công việc mới vào danh sách công việc
        this.setState({
            todoList: [...this.state.todoList, job]
        });

        toast.success('Add Success')
    }

    hanldOnClickDeleteToDo = (job) => {
        let currentTodDo = this.state.todoList;
        currentTodDo = currentTodDo.filter(item => item.id !== job.id);
        this.setState({
            todoList: currentTodDo
        })

        toast.success('Delete Success')

    }

    hanldOnClickUpdateToDo = (event) =>{
        this.setState({
            name : event.target.value
        })
    }
    render() {
        let { todoList } = this.state;
        return (
            <>
                {/* Truyền hàm addNewList vào component AddNewToDo */}
                <AddNewToDo addNewJob={this.addNewList} />
                <div className="print_item">
                    {todoList.length > 0 &&
                        todoList.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.id} - {item.name}
                                    <button onChange={(event) => this.hanldOnClickUpdateToDo(event)} className="btn-update-job">Update</button>
                                    <button onClick={() => this.hanldOnClickDeleteToDo(item)} className="btn-delete-job">Delete</button>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    }
}

export default ToDoList;

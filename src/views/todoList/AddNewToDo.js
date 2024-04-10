import React from "react";
import './style_ToDoList.scss'
import { toast } from 'react-toastify';


class AddNewToDo extends React.Component {
    state = {
        name: ''
    }

    handleOnChangeUpdateJob = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleOnClickToDoList = (event) => {
        event.preventDefault();

        // Kiểm tra xem props AddNewToDo đã được truyền vào chưa
        if (this.props.addNewJob) {
            if(!this.state.name ){

                toast.error('Missing paramter')
                return;

            }
            // Gọi hàm từ props để thêm công việc mới
            this.props.addNewJob({
                id: Math.floor(Math.random() * 1001),
                name: this.state.name
            });

            // Reset trạng thái về giá trị mặc định sau khi thêm công việc
            this.setState({
                name: ''
            });
        }

    }

    render() {
        return (
            <>
                <div className="input_add_todo">
                    <input onChange={(event) => this.handleOnChangeUpdateJob(event)} value={this.state.name} className="input-todoList" />
                    <button onClick={(event) => this.handleOnClickToDoList(event)} className="button-sumbit-todoList">Add</button>
                </div>
            </>
        );
    }
}

export default AddNewToDo;

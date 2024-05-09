import React from "react";
import {toast} from 'react-toastify';

class AddComponent extends React.Component {

    state = {
        nameJob: '',
        salary: ''
    }
    
    handleChangeFirstName = (event) => {
        this.setState({
            nameJob: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.nameJob || !this.state.salary){
            
            toast.warning('Missing parameter')
            return;
        }
        console.log('>>> check data input: ', this.state);
        this.props.addNewJob({
            id : Math.floor(Math.random() * 1001),
            nameJob :this.state.nameJob,
            salary : this.state.salary
        });

        this.setState({
            nameJob : '',
            salary : ''
        })
        toast.success('Add Success')

    }

    render(){
        
        return(
            <>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fname">Name Job:</label><br />
                <input
                    type="text"
                    value={this.state.nameJob}
                    onChange={this.handleChangeFirstName}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={this.handleChangeLastName}
                /><br /><br />
                <input type="submit" value="Submit" />
            </form>
       
        </>
            
        )
    }
}

export default AddComponent;
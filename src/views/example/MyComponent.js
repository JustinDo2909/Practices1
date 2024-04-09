// import React from 'react';
// import ChildComponent from './ChildComponent';
// class MyComponent extends React.Component {
//     //key:value
//     state = {
//         firstName: '',
//         lastName: '',
//         arrJobs: [
//             { id: 'abcJob1', title: 'Developers', salary: '500 $' },
//             { id: 'abcJob2', title: 'Testers', salary: '400 $' },
//             { id: 'abcJob3', title: 'Project managers', salary: '1000 $' }
//             { id: 'abcJob1', title: 'Developers', salary: '500' },
//             { id: 'abcJob2', title: 'Testers', salary: '400' },
//             { id: 'abcJob3', title: 'Project managers', salary: '1000' }
//         ]
//     }

//     /* 
//     JSX => return block
//     fragment
//     */
//     handleChangeFirstName = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }
//     handleChangeLastName = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         console.log('>>> check data input: ', this.state)
//     }
//     //re-render
//     render() {
//         console.log('>>> call render: ', this.state)
//         return (
//             <>
//                 <form>
//                     <label htmlFor="fname">First name:</label><br />
//                     <input
//                         type="text"
//                         value={this.state.firstName}
//                         onChange={(event) => this.handleChangeFirstName(event)}
//                     />
//                     <br />
//                     <label htmlFor="lname">Last name:</label><br />
//                     <input
//                         type="text"
//                         value={this.state.lastName}
//                         onChange={(event) => this.handleChangeLastName(event)}
//                     /><br /><br />
//                     <input type="submit"
//                         onClick={(event) => this.handleSubmit(event)}
//                     />
//                 </form>
//                 <ChildComponent
//                     name={this.state.firstName}
//                     age={'25'}
//                     address={'Ha noi'}
//                     arrJobs={this.state.arrJobs}
//                 />
//             </>
//         )
//     }
// }
// export default MyComponent;



import React from 'react';
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    state = {

        arrJobs: [
            { id: 'abcJob1', nameJob: 'Developers', salary: '500' },
            { id: 'abcJob2', nameJob: 'Testers', salary: '400' },
            { id: 'abcJob3', nameJob: 'Project managers', salary: '1000' },

        ]
    }
    
    addNewJob = (job) => {
        this.setState({
            arrJobs : [...this.state.arrJobs , job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs : currentJobs
        })
    }
    render() {
       

        return (
            
            <>
                <AddComponent 
                addNewJob = {this.addNewJob}
                />

                <ChildComponent
                arrJobs={this.state.arrJobs}
                deleteJob = {this.deleteJob}
            />
            </>
            
        );
    }
}

export default MyComponent;

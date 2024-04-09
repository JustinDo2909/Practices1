// import React from 'react';

// // class ChildComponent extends React.Component {
// //     //re-render
// //     render() {
// //         console.log('>>> check props: ', this.props)
// //         // let name = this.props.name;
// //         // let age = this.props.age;
// //         //key:value

// //         let { name, age, address, arrJobs } = this.props;

// //         return (
// //             <>
// //                 <div className="job-lists">
// //                     {
// //                         arrJobs.map((item, index) => {
// //                             return (
// //                                 <div key={item.id}>
// //                                     {item.title} - {item.salary}
// //                                 </div>
// //                             )
// //                         })
// class ChildComponent extends React.Component {
//     //re-render
//     state = {
//         showJobs: false
//     }

// //                     }
//     handleShowHide = () => {
//         this.setState({
//             showJobs: !this.state.showJobs
//         })
//     }
//     render() {
//         let { arrJobs } = this.props;
//         let { showJobs } = this.state;
//         let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
//         console.log('>>> check conditional: ', check)
//         return (
//             <>
//                 {showJobs === false ?
//                     <div>
//                         <button onClick={() => this.handleShowHide()}>Show</button>
//                     </div>
//                     :
//                     <>
//                         <div className="job-lists">
//                             {
//                                 arrJobs.map((item, index) => {
//                                     return (
//                                         <div key={item.id}>
//                                             {item.title} - {item.salary}
//                                         </div>
//                                     )
//                                 })

// //                 </div>
// //             </>
// //         )
//                             }

// //     }
// // }
//                         </div>
//                         <div>
//                             <button onClick={() => this.handleShowHide()}>Hide</button>
//                         </div>
//                     </>
//                 }
//             </>
//         )

// const ChildComponent = (props) => {
//     }
// }

//     let { arrJobs } = props;
// // const ChildComponent = (props) => {

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
// //     let { arrJobs } = props;

//                 }
// //     return (
// //         <>
// //             <div className="job-lists">
// //                 {
// //                     arrJobs.map((item, index) => {
// //                         if (+item.salary >= 500) {
// //                             return (
// //                                 <div key={item.id}>
// //                                     {item.title} - {item.salary} $
// //                                 </div>
// //                             )
// //                         }

//             // </div>
//         </>
//     )
// }
// //                     })

// //                 }

// //             </div>
// //         </>
// //     )
// // }
// export default ChildComponent;



import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { arrJobs } = this.props;
        // let {nameJob , salary} = this.props
        let { showJobs } = this.state;

        return (
            <>
                {!showJobs ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        {/* <div>{nameJob} - {salary}</div> */}
                        <div className="job-lists">
                            {
                                
                                arrJobs.map((item, index) => {
                                    // if(item.salary >= 500){
                                    return (
                                        <div key={item.id}>
                                            {item.nameJob} - {item.salary}
                                        </div>
                                    )
                                // }
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;

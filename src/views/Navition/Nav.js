import React from "react";
import './NavStyle.scss'

class Nav extends React.Component {
    render() {
        return (
            <div class="topnav" id="myTopnav">
                <a href="/" class="active">Home</a>
                <a href="/todo">ToDo List</a>
                <a href="/AddJob">AddJob</a>
                {/* <a href="#about">About</a> */}
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        )
    }


}

export default Nav;
import React, {Component} from "react";

export default class AppBody extends Component{

    constructor(argu){
        super(argu);
        this.state = {
            "complete":"World"
        }
    }
    render(){
        return(
            <p> Hello {this.state.complete}</p>
        )
    }
}
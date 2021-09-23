import React, {Component} from "react";
import "./index.css"

export default class AppBody extends Component{

    constructor(argu){
        super(argu);
        this.state = {
            "complete":"World",
            "fname":"",
            "lname":"",
        }
    }

    change= (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]:value
        })
        console.log(this.state.fname);
        console.log(this.state.lname);
    }

    onSubmit = (e) => {
        const result = parseInt(this.state.fname) + parseInt(this.state.lname);
        this.setState({
            result:result
        })
    }

    render(){
        return(
            <div className="appbody">
                <p className="para"> Hello {this.state.complete}</p>
                <br/><br/>
                <label> enter your first name : - </label>
                <input type="text" name="fname" id="fname" value={this.state.fname} onChange={this.change}></input>
                <br/><br/>
                <label> enter your last name: - </label>
                <input type="text" name="lname" id="lname" value={this.state.lname} onChange={this.change}></input>
                <br/><br/>
                <input className="submit" type="button" value="submit" onClick={this.onSubmit}></input>
                <br/><br/>
                <h3>{this.state.fname} {this.state.lname}</h3>
                <br/><br/>
                <h3>{this.state.result}</h3>
            </div>
        )
    }
}
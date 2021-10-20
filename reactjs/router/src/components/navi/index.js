import React , {Component} from "react";
import {Link} from 'react-router-dom'
import "./index.css"

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to Router App</h1>
                <li><Link className="link" to="/"> Home </Link></li>
                <li><Link className="link" to="/about"> About </Link> </li>
                <li><Link className="link" to="/contact"> contact us </Link> </li>
                <li><Link className="link" to="/gallery"> Gallery </Link> </li>
            </div>
        )
    }
}
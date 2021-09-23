import React , {Component} from "react";
import {Link} from 'react-router-dom'

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <li><Link to="/about"> About </Link> </li>
                <li><Link to="/contact"> contact us </Link> </li>
                <li><Link to="/gallery"> Gallery </Link> </li>
            </div>
        )
    }
}
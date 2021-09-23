import React from "react";
import './index.css'

export default function AppHeader(props){
    return(
        <div className="header">
        <h1 className="main-header"><b> Welcome to the world of ReactApp </b></h1>
        <h2>username is :- {props.name}</h2>
        <h2>Location is :- {props.location}</h2>
        </div>
    )
}
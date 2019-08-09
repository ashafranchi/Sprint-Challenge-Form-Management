import React, {useState, useEffect} from "react";

export default function Users({ props }) {
console.log(props);
    return(
        <div className="container">
            <ul>
            <h3>Name: {props.name}</h3>
            <h3>Course: {props.course}</h3>
            <h3>Technique: {props.technique}</h3>
            <h3>Ingredients: {props.ingredients}</h3>
            </ul>
        </div>
    )
}

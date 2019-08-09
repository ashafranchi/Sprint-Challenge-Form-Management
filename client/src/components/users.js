import React, {useState, useEffect} from "react";

export default function Users({ props }) {
console.log(props);
    return(
        <div className="container">
            <ul data-testid="ulTest">
            <h4>Recipe Name: {props.name}</h4>
            <h4>Course: {props.course}</h4>
            <h4>Technique: {props.technique}</h4>
            <h4>Ingredients: {props.ingredients}</h4>
            </ul>
        </div>
    )
}

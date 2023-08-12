
import React from "react";
import "../Style/style.css"

const Square =(props)=>{
    return (
 
        <div 
        onClick={props.onClick}
        style={{margin:"5px",
        boxShadow: "rgba(0, 0, 0, 0.99) 0px 0px 10px",
        height:"100px",
        width:"80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"white",
        fontSize:"30px"
    }}
         className="square" >
            <h5>{props.value}</h5>
        </div>


    );

};

export default Square;
import React, { useState } from "react";

export default function Regist(){

    const [name, setName] = useState("");

    return(
        <>
        <div>
            <label>Userame</label>
            <input type="text" name="username" id="username"/>
            <br/>
            <label>Fullname</label>
            <input type="text" name="fulname" id="fulname"/>
            <br/>
            <label>Age</label>
            <input type="text" name="age" id="age"/>
            <br/>
            <button>Submit</button>
        </div>
        </>
    )
}
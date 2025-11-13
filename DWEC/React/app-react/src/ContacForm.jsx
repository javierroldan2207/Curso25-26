import React, { useState } from "react";

export default function ContacForm(){

    const [contacs, setContacs] = useState({
        id: 0,
        name:"",
        phone: ""
    });
    function handleChange(event){
        const {name, value} = event.target;
        setContacs(preventContacs => ({...preventContacs,[name]: value}));
    }

    function handleForm(event){
        if(contacs.name == '' || contacs.phone == '') return
        
    }


   

    return(
        <>
            <form onSubmit={handleForm}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange}/>
                <br />
                <label htmlFor="">Phone Number</label>
                <input type="text" name="phone" id="phone" onChange={handleChange} />

                <br/>
                <button>Add Contac</button>
            </form>
        </>
    )
}
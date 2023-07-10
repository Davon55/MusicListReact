import React, { useState } from "react";

export default function FormInput({id, title, placeholder, onChange}){
    const [inputData, setinputData] = useState('');

    //handles changes 
    function handleChangeData(e){
        setinputData(e.target.value);
        console.log("Contents of the input ", inputData);
        onChange(inputData);
    }
    return(
        <div>
            <label htmlFor={id}>{title}</label>
            <input onChange={handleChangeData} type="text" onBlur={handleChangeData} value={inputData} className="form-control" id={id} placeholder={placeholder}/>
         </div>
    )
}
import React from "react";
import { useState } from "react";


export default function FormTextArea({onChange, id, title, placeholder}){

    const [inputData, setinputData] = useState('');

    function handleChangeData(e){
        setinputData(e.target.value);
        console.log("Contents of the input ", inputData);
        onChange(inputData);
    }
    return(
        <div>
            <label htmlFor={id}>{title}</label>
            <textarea onChange={handleChangeData} type="text" onBlur={handleChangeData} value={inputData} className="form-control" id={id} placeholder={placeholder}/>
         </div>
    )
}
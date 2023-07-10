import React, { useState } from "react";

export default function SearchForm({onSubmit}) {

    const [inputText, setInputText] = useState('');

// A function that is triggered when the state is changed 
// the handler uses setState to recognize any changes 
    function handleChangeInput(e) {
        setInputText(e.target.value)
        console.log(inputText);
    }
//An function that is triggered when the search is submitted
    function handleFormSubmit(e) {
        e.preventDefault();
      onSubmit(inputText)
    }

    //JSX syntax with event handlers displayes the state of the component
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="search-term">Search box</label>
                    <input onChange={handleChangeInput} onSubmit={handleFormSubmit} type="text" className="form-control" placeholder="Search term here" />
                </div>
            </form>
        </div>
    );
}
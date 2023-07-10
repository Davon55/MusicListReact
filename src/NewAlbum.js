import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import FormTextArea from "./FormTextArea";
import { useNavigate } from "react-router-dom";


export default function NewAlbum({refresh}){

    //and array of data to be held in state
    let albumData = {
        title: "Title",
        artist: "Someone famous",
        description: "Great ablum",
        year: 1900,
        image: "image.jpg",
        tracks: []
    }

    const [state, setState] = useState(albumData);
    const navigation = useNavigate();
  
    // these functions update the data whenever changes occur
  function updateTitle(newTitle){
        setState({...state,title: newTitle});
        console.log("State of form = ", state)
    }
    function updateArtist(newArtist){
        setState({...state, artist: newArtist});
        console.log("State of form = ", state)
    }
    function updateDescription(newDescription){
        setState({...state, description: newDescription});
        console.log("State of form = ", state)
    }
    function updateYear(newYear){
        setState({...state, year: newYear});
        console.log("State of form = ", state)
    }
    function handleFormSubmit(e){
       e.preventDefault();
        console.log("Final submit ", state)
        saveAlbum(state);
    }
    //Post the data to the Rest service database 
   async function saveAlbum(album){
        axios.post('http://localhost:3000/albums', album)
        .then(results => {
            console.log(results);
            console.log(results.data);
            navigation("/", refresh = true)
        })
    }

    //JSX and HTML the Form component communicates with this component to create a data entry form 
    return(
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <h1>Create a new ablum</h1>
                    <FormInput id="albumTitle" title="Album Title" placeholder= "Enter title" onChange={updateTitle}/>
                    <FormInput id="albumArtist" title="Artist" placeholder= "Artist name" onChange={updateArtist}/>
                    <FormTextArea id="albumDescription"  title="Description" placeholder= "Details about the album" onChange={updateDescription}/>
                    <FormInput id="year" title="Year" placeholder= "2023" onChange={updateYear}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-light">Cancel</button>
            </form>
        </div>
    )
}
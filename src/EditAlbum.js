import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import FormTextArea from "./FormTextArea";
import { useNavigate,} from "react-router-dom";


export default function EditAlbum({refresh,id, title, artist,description, year, image, tracks, album}){

    let albumData = {
        id: album.id,
        title: album.title,
        artist: album.artist,
        description: album.description,
        year: album.year,
        image: album.image,
        tracks: album.tracks
    }

    const [state, setState] = useState(albumData);
    const navigation = useNavigate();
  
    //these functions handle changes when they occur
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

    //saves new data to the Rest service database
   async function saveAlbum(album){
        axios.put('http://localhost:3000/albums', album)
        .then(results => {
            console.log(results);
            console.log(results.data);
            navigation("/", refresh = true)
        })
    }

    
    return(
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <h1>Create a new ablum</h1>
                    <FormInput id="albumTitle" title="Album Title" value={album.title} placeholder= "Enter title" onChange={updateTitle}/>
                    <FormInput id="albumArtist" title="Artist" value={album.artist} placeholder= "Artist name" onChange={updateArtist}/>
                    <FormTextArea id="albumDescription"  title="Description" value={album.description} placeholder= "Details about the album" onChange={updateDescription}/>
                    <FormInput id="year" title="Year" value={album.year} placeholder= "2023" onChange={updateYear}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-light">Cancel</button>
            </form>
        </div>
    )
}
import React, { useEffect, useState } from "react";
import {  Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
//import albums from './albums.json'
import dataSource from "./dataSource";
import SearchForm from "./SearchForm";
import AlbumList from "./AlbumList";
import NavBar from "./NavBar";
import NewAlbum from "./NewAlbum";
import OneAlbum from "./OneAlbum";
import EditAlbum from "./EditAlbum";



export default function App() {

    //hook that allows you to navigate programmatically
    const navigate = useNavigate();

    //hooks to set and change state 
    const [albumList, setAlbumList] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(3);
    
    let refresh = false

    //Async and Await ensures the method waits for data to be loaded before proceeding to the change of state
    //this is asynchronous
    const loadAlbums = async () => {
        const  response = await dataSource.get('/albums');
     setAlbumList(response.data)
    }
//Every the component renders, react will update the screen and run the code in useEffect
//useEffect is a hook and must be called at the top level of your component
//this makes sure the list of alams are always loaded when a user comes to the albumList screen
    useEffect(() => {
      loadAlbums()
    }, [refresh])


    function deleteAlbum(albumId){
        console.log("App: Current deleted album id", albumId)
        let deletedAlbumCard = albumList.filter((album) =>{
            console.log(album.albumId, albumId)
            return album.albumId === albumId
        });
        console.log("Album to be delete ", deletedAlbumCard)
        setCurrentlySelectedAlbumId(albumList.filter((album) =>{
            return album !== deletedAlbumCard;
        }))
    }


        //Gets the correct album and submits it to the edit route
        function editAlbum(albumId){
            console.log("App. Edit currentlySelectedID = ", albumId);
            let indexNumber = 0;
            for(let x = 0; x < albumList.length; x++){

                if(albumList[x].id === albumId)
                indexNumber = albumId;
                console.log("in edit album", indexNumber)
            }
            setCurrentlySelectedAlbumId(indexNumber);
            navigate('/edit/' + indexNumber)
            console.log("state ", currentlySelectedAlbumId);
        }
    //Loop through all of the albums in the album list and find one that matches the id
    //then navigate to the one album by id
        function updateSingleAlbum(id){
            console.log("updateSingleAlbum =", id);
            let indexNumber = 0;
            for(let i =0; i < albumList.length; i++){
                if(albumList[i].id === id){
                    indexNumber = i;
                    console.log(indexNumber)
                }
                setCurrentlySelectedAlbumId(indexNumber);
                navigate('/show/' + indexNumber)
                console.log("State", currentlySelectedAlbumId);
                
            }
        }
//Receive a phrase and change the search phrase state variable 
//Through a callback which is passing the name of the parent method to a child
//This code is executed when the child calls the method 
//The phrase is sent to the database and data is sent back 
   async function updateSearchResults(phrase) {
        console.log("phrase =", phrase);
        setSearchPhrase(phrase);
        const response = await dataSource.get('/albums/search/description/' + phrase)
        console.log(response.data);
        setSearchPhrase(response.data);
    }
    

   
//Blew are components and passed in to those components are porps from other components 
//Route is a connection between the browsers URL and the contents of the web page 
    return(
        
        <div>
        <NavBar />
            <Routes>
                <Route path="/" element={
                <div>
                    <div className="container">
                <SearchForm onSubmit={updateSearchResults} />
                    </div>
                <AlbumList albumList={albumList}  onClick={updateSingleAlbum} onEditAlbum={editAlbum} onDeleteAlbum={deleteAlbum}/>
                </div>}/>
                <Route path="/new" element={<NewAlbum />}/>
                <Route path="/show/:albumId" element={<OneAlbum album={albumList[currentlySelectedAlbumId]}/>}/>
                <Route path="/edit/:albumId" element={<EditAlbum album={albumList[currentlySelectedAlbumId]} />}/>
            </Routes>
        </div>
       
    )
        
    
}

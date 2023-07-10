import React from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AlbumList({albumList, onClick, onEditAlbum, onDeleteAlbum}){

    const navigation = useNavigate();

    function handleSelectOne(albumid){
        console.log("Selected id =", albumid);
        onClick(albumid)
    }

    //method to trigger editAlbum
    function handleEditAlbum(albumId){
        console.log("Edit this id ", albumId);
        onEditAlbum(albumId)
    }
    function handleDeleteAlbum(albumId){
        console.log("Albumlist: Deleted album Id ", albumId)
        onDeleteAlbum(albumId)
        deleteAlbum(albumId)
    }

    async function deleteAlbum(albumId){
        axios.delete('http://localhost:3000/albums/' + albumId)
        .then(results => {
            console.log(results);
            console.log(results.data);
            navigation("/")
        })
    }
  
        const albums = albumList.map((album) => {
            return (
                <Card 
                albumId= {album.id}
                key = {album.id}
                title = {album.title}
                description = {album.description}
                buttonText = "Details"
                imgurl = {album.image}
                onClick = {handleSelectOne}
                editAlbum={handleEditAlbum}
                deleteAlbum={handleDeleteAlbum}
                />
            );
        });

        return (
            <div className="container">
                {albums}
            </div>
        )
    }

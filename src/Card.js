import React from "react";

//props that are passed to the parent component 
export default function Card({title, description, imgurl, buttonText, albumId, onClick, editAlbum, deleteAlbum}){

  //event is passed to the parent component 
  function handleButtonClick(e){
    console.log("Id clicked =" + albumId);
    onClick(albumId);
  }

  //handle function for the edit component 
  function handleAlbumEdit(e){
    console.log("In card component ", albumId)
    editAlbum(albumId)
  }
  function handleAlbumDelete(e){
    console.log("Deleted album id = ", albumId);
    deleteAlbum(albumId);
  }

return(

<div className="card" style={{width: '18rem'}}>
    <img src={imgurl} className="card-img-top" alt="image_name"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <span href="#" onClick={handleButtonClick} className="btn btn-primary">{buttonText}</span>
      <button href='#' onClick={handleAlbumEdit} className="btn btn-success">Edit</button>
      <button href='#' onClick={handleAlbumDelete} className="btn btn-secondary">Delete</button>
    </div>
  </div>

);

}


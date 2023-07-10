import React from "react";

export default function OneAlbum({album}){

//JSX and HTML to show oneAlbum
    return(
    <div className="container"> 
        <h2>Album Details for {album.title}</h2>
            <div className="row">
                <div className="col col-sm-3" >
                    <div className="card">
                        <img src={album.image} className="card-img-top" alt={album.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{album.title}</h5>
                                <p className="card-text">{album.description}</p>
                                <div className="list-group">
                                    <li>Show the album's tracks here</li>
                                    <li>Show the album's tracks here</li>
                                    <li>Show the album's tracks here</li>
                                </div>
                                <span href="#" className="btn btn-primary">Edit</span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-9">
                        <div className="card">
                            <p>Show the lyrics of a selected track here</p>
                        </div>
                        <div className="card">
                            <p>Video shown here</p>
                        </div>
                    </div>
            </div>
       
    </div>
    )
}
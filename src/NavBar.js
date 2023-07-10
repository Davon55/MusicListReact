import React from "react";
import { Link } from "react-router-dom";


export default function NavBar(){

    return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" href="#">Music</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
        <Link className="nav-link nav-item active" to="/">Albums</Link>
        <Link className="nav-link nav-item" to="/new">Create New</Link>
       
        </div>
  </div>
</nav>
    )
}
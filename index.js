//Application Dependencies
const { Album } = require('./lib/app/models/Album');
const { Track } = require('./lib/app/models/Track');
const { MusicDAO } = require('./lib/app/database/MusicDAO.js')
const bodyParser = require('body-parser');

//Create instance of an Express Application on port 3000
const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;
const cors = require('cors')

//Database configuration
const dbHost = "localhost";
const dbPort = 3306;
const dbUsername = "root";
const dbPassword = "root";

app.use(cors());
app.use(express.static('app/images'))
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`All listening on port ${port}`);
})

//Get route for the root
app.get('/', function(_req, res)
{
    console.log("This is the root");
    res.send("Hello this is our default route");
})

//GET route at '/artists' that returns all Artists from the database
app.get('/artists', function (_req, res)
{
    //Return Users List as JSON, call MusicDAO.findArtists and return JSON array of Artists (A string)
    console.log('IN GET /artists route');

    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findArtists(function(artists)
    {
        res.json(artists)
    })
});

//GET route at '/albums:artist that return a list of Albums for a given artist
app.get('/albums/:artist', function (_req, res)
{
    console.log('In GET /albums route ' + _req.params.artist);
    //Return a Albums list as JSON, call the MUISCDAO.findAlbums and return a JSON array of Albums
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.findAlbums(_req.params.artist, function(albums)
    {
        res.json(albums)
    });
});

//GET route at '/albums that returns a list of all Alarms
app.get('/albums', function(_req, res)
{
    console.log("Hi")
    console.log('IN GET /album route');
    //Return a Albums list as JSON, call the MusicDAO.findAllAlbums and return a JSON array of Albums
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.findAllAlbums(function(albums)
    {
        res.json(albums);
    })
});

//GET route at '/albums/:artist/id to return an ALbums with a specific id
app.get('/albums/:artist/:id', function(_req, res)
{
    console.log('IN GET /albums/:artist/:id ' + _req.params.id);
    //req album ID
    let albumID = Number(_req.params.id)
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.findAlbumById(albumID, function(album)
    {
        
        if(album == null)
        res.status(200).json({"error": "Invalid Album id"})
        else
        res.json(album)

        
    })
});

//GET route /albums/search/artist/{search} to return a list of Albums search by Artist
app.get('/albums/search/artist/:search', function(_req,res)
{
    console.log('IN GET /albums/search/artist/:search ' +  _req.params.search);
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword)
    let searchTerm = String(_req.params.search);
    //using MusicDAO.findbyArtist
    dao.findAlbumByArtist(searchTerm, function(albums)
    {
        res.json(albums);
    })
});

//GET /albums/search/description/{search} return a list of Albums search by Description
app.get('/albums/search/description/:search', function(_req, res)
{
    console.log('IN GET /albums/search/description/:search' + _req.params.search);
    //use MusicDAO.findAlbumByDescription
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.findAlbumByDescription(_req.params.search, (function(albums)
    {
        res.json(albums);
    }))
});

//POST /albums to create an Album and add an Album and its Tracks to the database
app.post('/albums', function(_req, res)
{
    //if invalid POST body then return 400 response else add Album and tracks to the database
    console.log('In POST /albums route with post of' + JSON.stringify(_req.body));
        console.log("req.body.title = " + _req.body.title);
        console.log("req.body.artist = " + _req.body.artist);
        console.log("req.body.description = " + _req.body.description);
        console.log("req.body.year = " + _req.body.year);
    if(!_req.body.title)
    {
        //Check for a valid POST Body, note this should validate EVERY field of the POST
        res.status(400).json({error: "Invalid Album Posted"});
    }
    else
    {
        //Create and Album object model from Posted data
        let tracks = [];
        for(let x=0; x < _req.body.tracks.length; ++x)
        {
            tracks.push(new Track(_req.body.tracks[x].id, _req.body.tracks[x].number, _req.body.tracks[x].title, _req.body.tracks[x].lyrics))
        }
        let album = new Album(-1, _req.body.title, _req.body.artist, _req.body.description, _req.body.year, _req.body.tracks);

        //use MusicDAO.create to create an Album from Posted Data and return and OK response
         let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword)
         dao.create(album, function(rowsChanged)
        {
            if(rowsChanged == -1)
            res.status(200).json({"error": "Creating Album and track failed"});
            else
            res.status(200).json({"success": "Creating Album passed with an Album Id of" + albumId});
        })
    }
    
});
//PUT /albums/{id} to update an Album for a given Artist and Album ID 
app.put('/albums', function(req, res)
{
     //if invalid POST body then return 400 response else add Album and tracks to the database
    console.log('In Put /albums route with Put of' + JSON.stringify(req.body));
    console.log("req.body.title = " + req.body.title)
    console.log("req.body.artist = " + req.body.artist)
    console.log("req.body.description = " + req.body.description)
    console.log("req.body.year = " + req.body.year)
    if(!req.body)
    {
        //Check for a valid POST Body, note this should validate EVERY field of the POST
        res.status(400).json({error: "Invalid Album Posted"});
    }
    else
    {
        //Create and Album object model from Posted data
        let tracks = [];
        for(let x=0; x < req.body.tracks.length; ++x)
        {
            tracks.push(new Track(req.body.tracks[x].id, req.body.tracks[x].number, req.body.tracks[x].title))
        }
        let album = new Album(req.body.id, req.body.title, req.body.artist, req.body.description, req.body.year);

        //update album
        //call MusicDAP.update to update and Album
        let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword)
        dao.update(album, function(rowsChanged)
        {
            if(rowsChanged === -1)
            res.status(200).json({"error": "Album was not updated"})
            else
            res.status(200).json({"Success": "Album was updated"});
        })
    }
});

//DELETE /albums/{artist}/{id} to delete an Album for a given Artist and ID
app.delete('/albums/:id', function(_req, res)
{
    //Get the Album
    console.log('In delete /albums route with ID of ' + _req.params.id);
    let albumId = Number(_req.params.id);

    //call MusicDAO.delete to delete on Album from the database and returned if passed
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.delete(albumId,(function(rowsChanged)
    {
        if(rowsChanged == 0)
            res.status(200).json({"error": "Album was not deleted"})
            else
            res.status(200).json({"Success": "Album was deleted"});
    }))
})
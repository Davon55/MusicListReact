//Object Model dependencies
import {Artist} from "../models/Artist";
import {Album} from "../models/Album";
import { Track } from "../models/Track";

//MySQL Module dependency
import * as mysql from "mysql";

//util Module dependency (for promisfy)
import * as util from "util";

export class MusicDAO
{
    private host: string = "localhost";
    private username: string = "root";
    private port: number = 3306;
    private password: string = "root";
    private schema: string = "music";
    private pool = this.initDbConnection();

    /**
     * non-default constructor
     * @param host Database Hostname
     * @param username Database Username
     * @param password Database password 
     */

    constructor(host: string, port: number, username: string, password: string)
    {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.pool = this.initDbConnection();
    }

// create a connection pool 
    private initDbConnection(): any
    {
        return mysql.createPool({host: this.host, port: this.port, user: this.username, password: this.password, 
            database: this.schema, connectionLimit: 10});
    }
    
    /**
 *CRUD method to return all Artists
 *
 * 
 * @param callback callback function with an Array of type artist
 */

 public findArtists(callback: any)
 {
    //List of Artist to return
    let artists:Artist[] = [];

    //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
    this.pool.getConnection(async function(err: any, connection: any)
    {
        
        //throw an error if an error
        if(err) throw err
//function (err: any, rows: any, fields:any
        connection.query =  util.promisify(connection.query);
        let result1 = await connection.query('SELECT distinct ARTIST FROM album')
        {
             //Release connection in the pool
            // connection.release();

            //Throw error if an error
            if (err) throw err

            //Loop over result set and save the Artist Name in the List of Artists
            for(let x = 0; x < result1.length; ++x)
            {
                artists.push(new Artist(x, result1[x].ARTIST));
            }

           
            //Do a callback to return the results
            callback(artists);
        }
    })
 }
    /**
 *CRUD method to return an album
 *
 * 
 */
 
    public findAlbums(artist: string, callback: any)
    {
        //return an album
        let albums: Album[] = [];
        //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
        this.pool.getConnection(async function(err: any, connection: any)
        {
            //connection.release();
            //thow an error if an error
            if(err) throw err;
            //user promisfy util to make an async function and run the query to get all albums for a specific artist
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM WHERE ARTIST=?',[artist])
            for(let x = 0; x < result1.length; ++x)
            {
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                let albumId = result1[x].ID
                let tracks: Track[] = [];
                let result2 = await connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                console.log(result2);
                for(let y = 0; y < result2.length; ++y)
                {
                    tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
            albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks))

            
            }

            //callback to return the albums
            callback(albums);
        });
    }
    //CRUD method to find all albums
    public findAllAlbums(callback: any)
    {
        //return an album
        let albums: Album[] = [];
        //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
        this.pool.getConnection(async function(err: any, connection: any)
        {
            //connection.release;
            //thow an error if an error
            if(err) throw err;
            //user promisfy util to make an async function and run the query to get all albums for a specific artist
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM')
            for(let x = 0; x < result1.length; ++x)
            {
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                let albumId = result1[x].ID
                let tracks: Track[] = [];
                let result2 = await connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                for(let y = 0; y < result2.length; ++y)
                {
                    tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
            albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks))

            }
            //callback
            callback(albums);
        })
    }
    //CRUD method to find album by ID
    public findAlbumById(albumId: number, callback: any)
    {
        //return an album
        let albums: Album[] = [];
        //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
        this.pool.getConnection(async function(err: any, connection: any)
        {
            //connection.release();
            //thow an error if an error
            if(err) throw err;
            //user promisfy util to make an async function and run the query to get all albums for a specific artist
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM WHERE ID=?', [albumId])
            for(let x = 0; x < result1.length; ++x)
            {
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                let albumId = result1[x].ID
                let tracks: Track[] = [];
                let result2 = await connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                for(let y = 0; y < result2.length; ++y)
                {
                    tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
            albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks))

            }
            //callback
            callback(albums);
        })
       
    }

    //CRUD method to find album by Artist 
    public findAlbumByArtist(search: string, callback: any)
    {
        //return an album
        let albums: Album[] = [];
        //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
        this.pool.getConnection(async function(err: any, connection: any)
        {
            //connection.release;
            //thow an error if an error
            if(err) throw err;
            //user promisfy util to make an async function and run the query to get all albums for a specific artist
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM WHERE ARTIST LIKE "%%" ',[search])
            for(let x = 0; x < result1.length; ++x)
            {
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                let albumId = result1[x].ID
                let tracks: Track[] = [];
                let result2 = await connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                for(let y = 0; y < result2.length; ++y)
                {
                    tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
            albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks))

            }
            callback(albums);
        })
       
    }

     //CRUD method to find album by Description 
     public findAlbumByDescription(search: string, callback: any)
     {
         //return an album
         let albums: Album[] = [];
         //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
         this.pool.getConnection(async function(err: any, connection: any)
         {
            //connection.release();
            //thow an error if an error
            if(err) throw err;
            
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM WHERE DESCRIPTION LIKE "%%" ', [search])
            for(let x = 0; x < result1.length; ++x)
            {
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                let albumId = result1[x].ID
                let tracks: Track[] = [];
                let result2 = await connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                for(let y = 0; y < result2.length; ++y)
                {
                    tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
            albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks))

            }
             //callback
             callback(albums);
         })
        
     }

     //CRUD method to create a new album
     public create(album: Album, callback: any)
     {
        let albums: Album[] = [];
        //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
        this.pool.getConnection(async function(err: any, connection: any)
        {
           // connection.release();
            //thow an error if an error
            if(err) throw err;
             //use promisfy util to make an async function and insert Album
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query('INSERT INTO ALBUM (TITLE, ARTIST, YEAR, DESCRIPTION) VALUES(?,?,?,?)', [album.Title, album.Artist, album.Year, album.Description]);
            for(let x = 0; x < result1.length; ++x)
            {
            if( result1.affectedRows != 1)
            callback(-1);
             //use promisfy util to make an async function and insert tracks for the Album
             let albumId = result1.insertId;
             let tracks: Track[] = [];
             let result2 = await connection.query('INSERT INTO TRACK (ALBUM_ID, TITLE, NUMBER, LYRICS) VALUES(?,?,?,?)', [albumId, album.Tracks[x].Id, album.Tracks[x].Title, album.Tracks[x].Number] );
             for(let y =0; y < result2.length; ++y)
             {
                
                tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
             } 
             albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks))
            }
             callback(albums)
        })
     }

     //CRUD method to update the albume
     public update(album:Album, callback: any)
     {
        let albums: Album[] = [];
        //Get a pooled connection to the database, run the query to update th album
        this.pool.getConnection(async function(err: any, connection: any)
        {
           // connection.release();
            //thow an error if an error
            if(err) throw err;
             //use promisfy util to make an async function and update an Album
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query(`UPDATE ALBUM SET TITLE=?, ARTIST=?, DESCRIPTION=?, YEAR=? WHERE id=?`, [album.Title, album.Artist, album.Description, album.Year,album.Id])
            for(let x = 0; x < result1.length; ++x)
            {
            if( result1.affectedRows != 1)
            callback(-1);
             //use promisfy util to make an async function and insert tracks for the Album
             let albumId = result1.insertId;
             let tracks: Track[] = [];
             let result2 = await connection.query('UPDATE TRACK SET ALBUM_ID=?, TITLE=?, NUMBER=?, LYRICS=?', [albumId, album.Tracks[x].Title, album.Tracks[x].Number]);
            for(let y =0; y < album.Tracks.length; ++y)
             {
                
                tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                 
             }
             albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks))
            }
             callback(albums);
        })
    }
    //CRUD method to delete an album
    public delete(albumId: number, callback: any)
    {
        
        //Get a pooled connection to the database, run the query to delete an album
        this.pool.getConnection(async function(err: any, connection: any)
        {
          //  connection.release;
            //thow an error if an error
            if(err) throw err;
             //use promisfy util to make an async function to delete an Album
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query('DELETE FROM ALBUM WHERE ID=?', [albumId])
            if(result1.affectedRows != 1)
            callback(-1);
            
        })
        callback(albumId)
    }
}
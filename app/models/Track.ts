export class Track
{
    //define properties
    private id: number = -1;
    private number: number = -1;
    private title: string = "";
    private lyrics: string = ""

    //constructor to initialize all properties
    constructor(id: number, number: number, title: string, lyrics: string)
    {
        this.id = id;
        this.number = number;
        this.title = title;
        this.lyrics = lyrics
    }

    //getters and setters to access properties 
    get Id():number
    {
        return this.id;
    }
    set Id(id: number)
    {
        this.id = id;
    }

    get Number():number
    {
        return this.number;
    }
    set Number(number: number)
    {
        this.number = number;
    }

    get Title():string
    {
        return this.title;
    }
    set Title(title: string)
    {
        this.title = title;
    }

    get Lyrics():string
    {
        return this.lyrics;
    }
    set Lyrics(lyrics: string)
    {
        this.lyrics = lyrics;
    }

}
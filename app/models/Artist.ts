export class Artist
{
    //properties
    private id: number = -1;
    private name: string = "";

    //constructor to initialize constructor
    constructor(id: number, name: string)
    {
        this.id = id;
        this.name = name;
    }
    
    //getters and setters to access properties
    get Id(): number
    {
      return  this.id;
    }
    set Id(id: number)
    {
        this.id = id;
    }

    get Name(): string
    {
        return this.name;
    }

    set Name(name: string)
    {
        this.name = name;
    }
}
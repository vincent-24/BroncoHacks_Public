class person
{
    //Created each time the hobbies page is go
    var personName = "No Name";
    var groupsSearching = ["no", "groups"];
    
    constructor(personName, groupsSearching)
    {
        this.personName = personName;
        this.groupsSearching = groupsSearching;
    }

    addServer(server)
    {
        groupsSearching.push(server);
    }

    removeFromAllChats()
    {
        groupsSearching.forEach((element) => element.removeFromServer(this));
    }
}

class server
{
    constructor(peopleWaiting)
    {
        this.peopleWaiting = peopleWaiting;
    }

    //Methods
    checkCount()
    {
        //check every time new participant added to server
        if(peopleWaiting == 6)
        {
            //Make group chat
            peopleWaiting.forEach((element) => console.log("Person here"));
            peopleWaiting.forEach((element) => element.removeFromAllChats());
        }
    }

    removeFromServer(remove)
    {
        peopleWaiting.remove(remove);
    }

    addToServer(addTo)
    {
        this.peopleWaiting.push(addTo);
    }
}

var SportsServer = new server(0);
var GamingServer = new server(0);
var FashionServer = new server(0);
var MusicServer = new server(0);
var SchoolServer = new server(0);
var ArtServer = new server(0);
var PopCultServer = new server(0);
var GymServer = new server(0);

var AllPeople;

newPerson(personName)
{
    var Sports = false;
    var Gaming = false;
    var Fashion = false;
    var Music = false;
    var School = false;
    var Art = false;
    var PopCult = false;
    var Gym = false;

    var servers;

    if(Sports == true)
    {
        servers.push(SportsServer);
    }
    if(Gaming == true)
    {
        servers.push(GamingServer);
    }
    if(Fashion == true)
    {
        servers.push(FashionServer);
    }
    if(Music == true)
    {
        servers.push(MusicServer);
    }
    if(School == true)
    {
        servers.push(SchoolServer);
    }
    if(Art == true)
    {
        servers.push(ArtServer);
    }
    if(PopCult == true)
    {
        servers.push(PopCultServer);
    }
    if(Gym == true)
    {
        servers.push(GymServer);
    }

    //Called when Go!
    var newbie = new person(personName, servers);

    servers.forEach((element) => element.addToServer(newbie));
    servers.forEach((element) => element.checkCount());
}


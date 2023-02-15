var database = [
	{
		username: "Danilo99",
		password: "omotehinse"
	},
    {
		username: "sakarious",
		password: "mygee"
	},
    {
		username: "yk",
		password: "omoiyame"
	},
    {
		username: "travis",
		password: "malians"
	}
];


var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function isUserValid( user, pass){
    for(var i=0; i < database.length; i++){
        if(database[i].username === user &&
            database[i].password === pass){
                return true;
            }
           
        }
        return false
}
function signIn(user, pass){
    if (isUserValid(user,pass)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong username and password")
    }
    
    };
    

signIn(userNamePrompt,passwordPrompt); 
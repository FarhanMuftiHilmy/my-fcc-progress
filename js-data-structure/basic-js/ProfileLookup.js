// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for (var i=0;i<4;i++){
        if (contacts[i]["firstName"] === name && prop in contacts[i]){
            return contacts[i][prop]
        } else if(contacts[i]["firstName"] === name && !(prop in contacts[i])){
        	return "No such property" 
        } 
    }
    
    
    return "No such contact";

// Only change code above this line
}

console.log(lookUpProfile("Bob", "potato")); //return no such contact
console.log(lookUpProfile("Kristian", "lastName")); // return value of given property based on its value
console.log(lookUpProfile("Akira", "address")); // return no such property

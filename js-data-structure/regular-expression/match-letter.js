// Match Single Character with Multiple PossibilitiesPassed  using []//

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result)

// Match Numbers and Letters of the Alphabet using -//



let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result2 = quoteSample2.match(myRegex); // Change this line

console.log(result2)


// Match Single Characters Not Specified using ^//

let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou^0123456789]/ig; // Change this line
let result3 = quoteSample3.match(myRegex2); // Change this line

console.log(result3)

// Match Characters that Occur One or More Times using +, Noted that aba would return a and aab would return a , a should occur consecutively//

let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Change this line
let result4 = difficultSpelling.match(myRegex3);

console.log(result4)

// Match Characters that Occur Zero or More Times using * //
let chewieQuote	= "Aaaaaaaaaaaaaaaarrrgh!";

let chewieRegex = /Aa*/; // Change this line

let result5 = chewieQuote.match(chewieRegex);

console.log(result5)

// Find Characters with Lazy Matching using ? //

//Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
//However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"]

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // Change this line
let result6 = text.match(myRegex4);

console.log(result6)

// Match Beginning String Patterns using ^//

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result7 = calRegex.test(rickyAndCal);

console.log(result7)

// Match Ending String Patterns using $//

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result8 = lastRegex.test(caboose);

console.log(result8)

// Match All Letters and Numbers using \w //

// Noted that it is the same with [A-Za-z0-9_] , all numbers and letters and also an underscore included

let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result9 = quoteSample4.match(alphabetRegexV2).length;

console.log(result9)


// Match Everything But Letters and Numbers \W//

// Noted that it is the same with ^[A-Za-z0-9_]

let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result10 = quoteSample5.match(nonAlphabetRegex).length;

console.log(result10)

// Match All Numbers using \d//

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result11 = movieName.match(numRegex).length;

console.log(result11)

// Match All Non-Numbers using \D//

let movieName2 = "2001: A Space Odyssey";
let noNumRegex2 = /\D/g; // Change this line
let result12 = movieName2.match(noNumRegex2).length;

console.log(result12)

// Restrict Possible Usernames //
/*
1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Test Case
Your regex should match JACK
Passed
Your regex should not match J
Passed
Your regex should match Jo
Passed
Your regex should match Oceans11
Passed
Your regex should match RegexGuru
Passed
Your regex should not match 007
Passed
Your regex should not match 9
Passed
Your regex should not match A1
Passed
Your regex should not match BadUs3rnam3
Passed
Your regex should match Z97
Passed
Your regex should not match c57bT3
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d\d+|[a-z]+\d*)$/i; // Change this line
let result13 = userCheck.test(username);


console.log(result13)







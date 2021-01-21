// Match Single Character with Multiple PossibilitiesPassed  using []//

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

console.log("Soal 1")

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


console.log(result)

// Match Numbers and Letters of the Alphabet using -//


console.log("Soal 2")
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result2 = quoteSample2.match(myRegex); // Change this line

console.log(result2)


// Match Single Characters Not Specified using ^//
console.log("Soal 3")
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou^0123456789]/ig; // Change this line
let result3 = quoteSample3.match(myRegex2); // Change this line

console.log(result3)

// Match Characters that Occur One or More Times using +, Noted that aba would return a and aab would return a , a should occur consecutively//
console.log("Soal 4")
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Change this line
let result4 = difficultSpelling.match(myRegex3);

console.log(result4)

// Match Characters that Occur Zero or More Times using * //
console.log("Soal 5")
let chewieQuote	= "Aaaaaaaaaaaaaaaarrrgh!";

let chewieRegex = /Aa*/; // Change this line

let result5 = chewieQuote.match(chewieRegex);

console.log(result5)

// Find Characters with Lazy Matching using ? //

//Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
//However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"]

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

console.log("Soal 6")

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // Change this line
let result6 = text.match(myRegex4);

console.log(result6)

// Match Beginning String Patterns using ^//
console.log("Soal 7")

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result7 = calRegex.test(rickyAndCal);

console.log(result7)

// Match Ending String Patterns using $//
console.log("Soal 8")

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result8 = lastRegex.test(caboose);

console.log(result8)

// Match All Letters and Numbers using \w //

// Noted that it is the same with [A-Za-z0-9_] , all numbers and letters and also an underscore included
console.log("Soal 9")

let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result9 = quoteSample4.match(alphabetRegexV2).length;

console.log(result9)


// Match Everything But Letters and Numbers \W//

// Noted that it is the same with ^[A-Za-z0-9_]
console.log("Soal 10")

let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result10 = quoteSample5.match(nonAlphabetRegex).length;

console.log(result10)

// Match All Numbers using \d//
console.log("Soal 11")

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result11 = movieName.match(numRegex).length;

console.log(result11)

// Match All Non-Numbers using \D//
console.log("Soal 12")

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
console.log("Soal 13")
let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d\d+|[a-z]+\d*)$/i; // Change this line
let result13 = userCheck.test(username);


console.log(result13)



// Match Whitespace using \s//

//This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v]
console.log("Soal 14")
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result14 = sample.match(countWhiteSpace);

console.log(result14)

// Match Non-Whitespace Characters using \S //

// it is similar to [^ \r\t\f\n\v]
console.log("Soal 15")
let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result15 = sample2.match(countNonWhiteSpace);

console.log(result15)


// Specify Upper and Lower Number of Matches using {a,b} //
console.log("Soal 16")
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result16 = ohRegex.test(ohStr);

console.log(result16)

// Specify Only the Lower Number of Matches using {a,}//
console.log("Soal 17")
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result17 = haRegex.test(haStr);

console.log(result17)

// Specify Exact Number of Matches using {a}//
console.log("Soal 18")
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result18 = timRegex.test(timStr);

console.log(result18)

// Check for All or None using a?//
console.log("Soal 19")
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result19 = favRegex.test(favWord);

console.log(result19)

// Positive and Negative Lookahead //


// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long,
// do not begin with numbers, and have two consecutive digits.

// test case
// Your regex should use two positive lookaheads.
// Passed
// Your regex should not match "astronaut"
// Passed
// Your regex should not match "banan1"
// Passed
// Your regex should match "bana12"
// Passed
// Your regex should match "abc123"
// Passed
// Your regex should not match "1234"
// Passed
// Your regex should not match "8pass99"
// Passed
// Your regex should not match "12abcde"
// Passed
// Your regex should match "astr1on11aut"
console.log("Soal 20")

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=^\D)(?=\w{3,}\d\d)/; // Change this line
let result20 = pwRegex.test(sampleWord);

console.log(result20)


// Check For Mixed Grouping of Characters using () //
console.log("Soal 21")
let myString = "Eleanor Roosevelt";
let myRegex5 = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let result21 = myRegex5.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result21)

// Reuse Patterns Using Capture Groups using () and \number to specify//

//Using the .match() method on a string will return an array with the string it matches, along with its capture group.
console.log("Soal 22")
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result22 = reRegex.test(repeatNum);

console.log(result22)


// Use Capture Groups to Search and Replace //
console.log("Soal 23")
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = '$3 $2 $1'; // Change this line
let result23 = str.replace(fixRegex, replaceText);

console.log(result23)

// Remove Whitespace from Start and End //
console.log("Soal 24")

let hello = "   Hello, World!  ";
let wsRegex = /\S{1,6}\s\S{1,6}/gi; // Change this line

let result24 = hello.match(wsRegex); // Change this line

console.log(result24)











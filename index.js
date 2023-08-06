"use strict";
// Batch: 47
// Course: WEB 3.0
// 1. Install Node.js, TypeScript and VS Code on your computer.
// Task 2 => Personal Message: Store a person’s name in a variable, and print a message to that person. 
var pName = "Usman";
console.log("\n\nTASK 2");
console.log(`Hello ${pName}, would you like to learn some Python today?`);
// Task 3 => Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Usman Ghazi";
console.log("\n\nTASK 3");
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));
function toTitleCase(str) {
    return str.toLowerCase().replace(/^(.)|\s+(.)/g, function ($1) {
        return $1.toUpperCase();
    });
}
// Task 4 => Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("\n\nTASK 4");
const quote = 'A person who never made a mistake never tried anything new.';
const author = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);
// Task 5 => Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("\n\nTASK 5");
const famous_person = 'Albert Einstein';
const quote2 = 'A person who never made a mistake never tried anything new.';
const message = `${famous_person} once said, "${quote2}"`;
console.log(message);
// Task 6 => Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\n\nTASK 6");
const nameWithWhitespace = '\t   \n   Usman Ghazi   \t\n   ';
const strippedName = nameWithWhitespace.trim();
console.log("Name with whitespace:", nameWithWhitespace);
console.log("Stripped name:", strippedName);
// Task 7 => Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("\n\nTASK 7");
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 15 - 7);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 32 / 4);
// Task 8 => You should create four lines that look like this:
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("\n\nTASK 8");
const horizontalLine = "-".repeat(20);
console.log(horizontalLine);
console.log("\t", 5 + 3, "\t");
console.log(horizontalLine);
// Task 9 => Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\n\nTASK 9");
const favoriteNumber = 11;
const msg = `My favorite number is ${favoriteNumber}.`;
console.log(msg);
// Task 10 => Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Task 11 => Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\n\nTASK 11");
const names = ["KHIZER", "AWAIS", "HAIDER", "LAIBA"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Task 12 => Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\n\nTASK 12");
const F_names = ["KHIZER", "AWAIS", "HAIDER", "LAIBA"];
;
const F_message = "Hello, {F_names}! How are you today?";
for (let i = 0; i < F_names.length; i++) {
    const personalizedMessage = F_message.replace("{F_names}", F_names[i]);
    console.log(personalizedMessage);
}
// Task 13 => Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\n\nTASK 13");
const vehicles = ["Honda motorcycle", "Tesla Model S", "Ford Mustang", "Toyota Camry"];
for (let i = 0; i < vehicles.length; i++) {
    console.log("I would like to own a", vehicles[i]);
}
// Task 14 => Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\n\nTASK 14");
const guestList = ["kHIZER", "AWAIS", "HAIDER"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nPlease let me know if you can make it.\nSincerely, [Usman Ghazi]`);
}
// Task 15 => Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("\n\nTASK 15");
// const guestList: string[] = ["kHIZER", "AWAIS", "HAIDER"];
const cannotAttend = guestList[1]; // The guest at index 1 cannot attend
console.log(cannotAttend + " cannot make it to the dinner.");
guestList[1] = "Nikola Tesla"; // Replace the guest who can't attend with a new person
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nPlease let me know if you can make it.\nSincerely, [Usman SHEHABZ]`);
}
// TASK 16 => More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("\n\nTASK 16");
console.log(cannotAttend + " cannot make it to the dinner.");
guestList[1] = "LAIBA"; // Replace the guest who can't attend with a new person
console.log("Good news! We found a bigger dinner table.");
guestList.unshift("ISRA"); // Add a new guest to the beginning of the array
guestList.splice(2, 0, "NIDA"); // Add a new guest to the middle of the array
guestList.push("SHEEEZA"); // Append a new guest to the end of the array
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nPlease let me know if you can make it.\nSincerely, [Usman Ghazi]`);
}
// TASK 17 => Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\n\nTASK 17");
console.log("Sorry, but we can only invite two people for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, but we can't invite you to dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are still invited to dinner. See you soon!\nSincerely, [Usman Ghazi]`);
}
guestList.length = 0; // Clear the guest list
console.log("Guest list:", guestList);
// TASK 18 => Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n\nTASK 18");
const placesToVisit = ["Saudia Arabia", "TURKEY", "Egypt", "Jordan", "Iran"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Original order:", placesToVisit);
console.log("Sorted in alphabetical order:", [...placesToVisit].sort());
console.log("Sorted in reverse alphabetical order:", [...placesToVisit].sort().reverse());
// TASK 19 => Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\n\nTASK 19");
const numberOfGuests = guestList.length;
console.log(`You are inviting ${numberOfGuests} people to dinner.`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nPlease let me know if you can make it.\nSincerely, [Usman Ghazi]`);
}
// TASK 20 => Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\n\nTASK 20");
const mountains = ["Mount Everest", "K2", "Kangchenjunga", "Matterhorn", "Mount Kilimanjaro"];
console.log(mountains);
// TASK 21 => They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\n\nTASK 21");
// Object 1
const country1 = {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    language: "English",
};
// Object 2
const country2 = {
    name: "France",
    capital: "Paris",
    population: 65273511,
    language: "French",
};
// Object 3
const country3 = {
    name: "Japan",
    capital: "Tokyo",
    population: 126476461,
    language: "Japanese",
};
console.log(country1);
console.log(country2);
console.log(country3);
// TASK 22 => Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("\n\nTASK 22");
const numbers = [1, 2, 3, 4, 5];
// Intentional error: Accessing an index that is out of bounds
console.log(numbers[5]); // This will produce an index error
// Correcting the error
console.log(numbers[4]); // Accessing a valid index
// Alternatively, we can use conditional logic to prevent the error
const index = 5;
if (index >= 0 && index < numbers.length) {
    console.log(numbers[index]);
}
else {
    console.log("Invalid index");
}
// TASK 23 => Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("\n\nTASK 23");
let car = 'subaru';
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota');
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');
console.log("Is car !== 'honda'? I predict true.");
console.log(car !== 'honda');
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
console.log("Is car > 'honda'? I predict true.");
console.log(car > 'honda');
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru');
// TASK 24 => More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log("\n\nTASK 24");
// Tests for equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict true.");
console.log(fruit == 'apple');
console.log("Is fruit == 'orange'? I predict false.");
console.log(fruit == 'orange');
console.log("Is fruit != 'banana'? I predict true.");
console.log(fruit != 'banana');
console.log("Is fruit != 'apple'? I predict false.");
console.log(fruit != 'apple');
// Tests using the lowercase function
let T_name = 'Usman';
console.log("Is name.toLowerCase() == 'Usman'? I predict true.");
console.log(T_name.toLowerCase() == 'Usman');
console.log("Is name.toLowerCase() == 'ali'? I predict false.");
console.log(T_name.toLowerCase() == 'ali');
// Numerical tests
let age = 23;
console.log("Is age == 23? I predict true.");
console.log(age == 23);
console.log("Is age != 30? I predict true.");
console.log(age != 30);
console.log("Is age > 18? I predict true.");
console.log(age > 18);
console.log("Is age < 30? I predict true.");
console.log(age < 30);
console.log("Is age >= 25? I predict true.");
console.log(age >= 25);
console.log("Is age <= 20? I predict false.");
console.log(age <= 20);
// Tests using "and" and "or" operators
let num1 = 10;
let num2 = 20;
console.log("Is num1 > 5 and num2 < 30? I predict true.");
console.log(num1 > 5 && num2 < 30);
console.log("Is num1 < 5 or num2 > 30? I predict false.");
console.log(num1 < 5 || num2 > 30);
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict true.");
console.log(fruits.includes('banana'));
console.log("Is 'grape' in the fruits array? I predict false.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
let colors = ['red', 'blue', 'green'];
console.log("Is 'yellow' not in the colors array? I predict true.");
console.log(!colors.includes('yellow'));
console.log("Is 'red' not in the colors array? I predict false.");
console.log(!colors.includes('red'));
// TASK 25 => Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("\n\nTASK 25");
// Version 1: Alien color is 'green' (Passes the if test)
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// Version 2: Alien color is 'red' (Fails the if test)
let alien_color_2 = 'red';
if (alien_color_2 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// TASK 26 => Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log("\n\nTASK 26");
// Version 1: Alien color is 'green' (Runs the if block)
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
// Version 2: Alien color is 'red' (Runs the else block)
if (alien_color_2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
// TASK 27 => Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\n\nTASK 27");
// Version 1: Alien color is 'green'
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// Version 2: Alien color is 'yellow'
let alien_color_3 = 'yellow';
if (alien_color_3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color_3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color_3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
// TASK 28 => Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
console.log("\n\nTASK 28");
let age_2 = 25;
if (age_2 < 2) {
    console.log("The person is a baby.");
}
else if (age_2 >= 2 && age_2 < 4) {
    console.log("The person is a toddler.");
}
else if (age_2 >= 4 && age_2 < 13) {
    console.log("The person is a kid.");
}
else if (age_2 >= 13 && age_2 < 20) {
    console.log("The person is a teenager.");
}
else if (age_2 >= 20 && age_2 < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// TASK 29 => Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("\n\nTASK 29");
const favorite_fruits = ['banana', 'apple', 'mango'];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
// TASK 30 => Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("\n\nTASK 30");
const usernames = ['admin', 'Eric', 'John', 'Jane', 'Alice'];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report? is at index: ", i);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
// TASK 31 => No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("\n\nTASK 31");
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
}
// Remove all usernames
usernames.length = 0;
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// TASK 32 => Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("\n\nTASK 32");
const current_users = ['kHIZER', 'AWAIS', 'HAIDER', 'LAIBA', 'ISRA'];
const new_users = ['ALI', 'Usman', 'BABER', 'SHEEZA', 'NIDA'];
for (let i = 0; i < new_users.length; i++) {
    const new_username = new_users[i];
    const usernameExists = current_users.some((username) => username.toLowerCase() === new_username.toLowerCase());
    if (usernameExists) {
        console.log(`The username "${new_username}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_username}" is available.`);
    }
}
// TASK 33 => Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("\n\nTASK 33");
const numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers_2.length; i++) {
    const number = numbers_2[i];
    let ordinal = '';
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log(`${number}${ordinal}`);
}
// TASK 34 => Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\n\nTASK 34");
const favorite_pizzas = ['Pepperoni', 'Margherita', 'Supreme'];
for (let i = 0; i < favorite_pizzas.length; i++) {
    const pizza = favorite_pizzas[i];
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
// TASK 35 =>  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\n\nTASK 35");
const animals = ['dog', 'cat', 'rabbit'];
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
// TASK 36 =>  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("\n\nTASK 36");
function make_shirt(size, message) {
    console.log(`The t-shirt size is ${size} and it has the message "${message}" printed on it.`);
}
make_shirt('L', 'I love coding!');
// TASK 37 => Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("\n\nTASK 37");
function make_shirt_2(size = 'large', message = 'I love TypeScript') {
    console.log(`The t-shirt size is ${size} and it has the message "${message}" printed on it.`);
}
make_shirt_2(); // Large shirt with default message
make_shirt_2('medium'); // Medium shirt with default message
make_shirt_2('small', 'Hello, world!'); // Custom size and message shirt
// TASK 38 => Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("\n\nTASK 38");
function describe_city(city, country = 'USA') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('New York');
describe_city('London', 'United Kingdom');
// TASK 39 => City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log("\n\nTASK 39");
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('New York', 'USA'));
console.log(city_country('Sydney', 'Australia'));
// TASK 40 => Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("\n\nTASK 40");
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Taylor Swift', 'Fearless'));
console.log(make_album('Ed Sheeran', 'Divide', 16));
console.log(make_album('Adele', '25'));
// Task 41 => Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("\n\nTASK 41");
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
show_magicians(magician_names);
// Task 42 => Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log("\n\nTASK 42");
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
function show_magicians_2(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const magician_names_2 = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
make_great(magician_names_2);
show_magicians_2(magician_names_2);
// Task 43 => Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("\n\nTASK 43");
function show_magicians_3(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great_2(magicians) {
    const great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}
const magician_names_3 = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
const great_magician_names = make_great_2([...magician_names_2]);
show_magicians_3(magician_names_2);
console.log("---");
show_magicians_3(great_magician_names);
// Task 44 => Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("\n\nTASK 44");
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Sandwich is ready!\n");
}
make_sandwich('lettuce', 'tomato', 'cheese');
make_sandwich('turkey', 'bacon');
make_sandwich('ham', 'mustard', 'pickles', 'onions');
// Task 45 => Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("\n\nTASK 45");
function create_car(manufacturer, model, ...kwargs) {
    const car = Object.assign({ manufacturer: manufacturer, model: model }, kwargs);
    return car;
}
const myCar = create_car('Toyota', 'Camry', { color: 'Silver', year: 2021 });
console.log(myCar);

/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/
const readline = require("readline-sync");

// Get player name using readline-sync
let playerName = ""
playerName = readline.question("What is your name, brave adventurer? ");

// Create variables for player stats
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "Village";
let gameRunning = true;
let inventory = [];

// Display the game title and welcome message
console.log("Welcome to the Adventure Game, " + playerName);
console.log("Prepare yourself for an epic journey!");
console.log("Below are your starting statistics: ")
console.log("Your health is: " + playerHealth)
console.log("Your starting gold amount is: " + playerGold)
console.log("Your current location is: " + currentLocation)
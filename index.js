const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
/* console.log("Practice 1 - Home Team:");
const homeTeam = fifaData.filter((element) => {if(element.Year === 2014 && element.Stage === 'Final'){return console.log(element['Home Team Name'])}});
console.log(homeTeam); */

//(b) Away Team name for 2014 world cup final
/* console.log("Practice 2 - Away Team:");
const awayTeam = fifaData.filter((element) => {if(element.Year === 2014 && element.Stage === 'Final'){return console.log(element['Away Team Name'])}});
console.log(awayTeam); */

//(c) Home Team goals for 2014 world cup final
/* console.log("Practice 3 - Home Team Goals:");
const homeGoals = fifaData.filter((element) => {if(element.Year === 2014 && element.Stage === 'Final'){return console.log(element['Home Team Goals'])}});
console.log(homeGoals); */

//(d) Away Team goals for 2014 world cup final
/* console.log("Practice 4 - Away Team Goals:");
const awayGoals = fifaData.filter((element) => {if(element.Year === 2014 && element.Stage === 'Final'){return console.log(element['Away Team Goals'])}});
console.log(awayGoals); */

//(e) Winner of 2014 world cup final */
/* console.log("Practice 5 - Winner:");
const cupWinner = fifaData.filter((element) => {if(element.Year === 2014 && element.Stage === 'Final'){if(element['Away Team Goals'] > element['Home Team Goals']){return console.log(element['Away Team Name'])} else{console.log(element['Home Team Name'])}}});
console.log(cupWinner) */


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(arr) {
    const finalTeams = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].Stage === 'Final'){
            finalTeams.push(arr[i]);
        }  
    }return finalTeams;
 } 
 /* console.log(getFinals(fifaData)); */



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, cbfunction) {
    let finals = cbfunction(arr);
    console.log(finals)
    let years = [];
    for(let i = 0; i < finals.length; i++){
        years.push(finals[i].Year);
    }
    return years;
}
/* console.log(getYears(fifaData, getFinals)) */



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

console.log("Task 4 Start - getWinners:")
function getWinners(arr, cbFunction) {
    const finals = cbFunction(arr);
    const winners = [];
    for(let i = 0; i < finals.length; i++){
        if(finals[i]['Away Team Goals'] > finals[i]['Home Team Goals']){
            winners.push(finals[i]['Away Team Name']);
        } else if(finals[i]['Home Team Goals'] > finals[i]['Away Team Goals']){
            winners.push(finals[i]['Home Team Name']);
        }
    } return winners;
}

console.log(getWinners(fifaData, getFinals))
console.log("_____________________________________________________________________")

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

console.log("Task 5 (getWinnersByYear) Start:")
function getWinnersByYear(arr, finalscb, yearscb, winnerscb) {
    const grandArr = finalscb(arr);
    const year = yearscb(grandArr);
    const winner = winnerscb(grandArr);
    const result = []
    for(let i = 0; i < grandArr.length; i++){
        result.push(`In ${year[i]}, ${winner[i]} won the world cup!`)
    } return result
} 




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive a callback function in a parameter that will take getFinals (from task 2) as an argument and ensure you pass in the fifaData as its argument
 
 💡 HINT: Example of invocation: getAverageGoals(getFinals(fifaData));

 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
 
*/

function getAverageGoals(finalscb) {
    const matches = finalscb;
    const goals = [];
    for(let i = 0; i < matches.length; i++){
        goals.push(matches[i]['Away Team Goals'])
        goals.push(matches[i]['Home Team Goals'])
    }
    const totalGoals = goals.reduce((accumulator, current) => {return accumulator + current});
    const average = totalGoals / matches.length
    return average.toFixed(2)
 }




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}

// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked () {
  
  document.getElementById("moneyGained").innerHTML = "hello"
  
  // User Data for Caculations
  let amountOfFans = parseFloat(document.getElementById("amount-of-fans").value);
  let ticketPrice  = parseFloat(document.getElementById("ticket-price").value);
  let playerWage  = parseFloat(document.getElementById("player-wage").value);
  let coachWage  = parseFloat(document.getElementById("coach-wage").value);
  let amountOfPlayers  = parseFloat(document.getElementById("amount-of-players").value);
  let gamesPlayed  = parseFloat(document.getElementById("games-played").value);
  
  
  
  //Calculate money gains, lost and total profit
  let moneyGained = amountOfFans * ticketPrice * gamesPlayed;
  let moneySpent = ((playerWage * amountOfPlayers) + coachWage) * gamesPlayed;
  let profit = moneyGained - moneySpent;
  
  // Data displayed back to user
  document.getElementById('moneyGained').innerHTML = 'The amount of money you make from your team is ' + moneyGained.toFixed(2) + "$"
  document.getElementById('moneySpent').innerHTML = 'The amount of money spent on your team is ' + moneySpent.toFixed(2) + "$"
  document.getElementById('profit').innerHTML = 'The profit you make from your team is ' + profit.toFixed(2) + "$"
}

// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked () {

  
  
  // User data input
  let amountOfFans = parseFloat(document.getElementById("amount-of-fans").value);
  let ticketPrice  = parseFloat(document.getElementById("ticket-price").value);
  let playerWage  = parseFloat(document.getElementById("player-wage").value);
  let coachWage  = parseFloat(document.getElementById("coach-wage").value);
  let gamesPlayed  = parseFloat(document.getElementById("games-played").value);
  
  
  //Calculate money gains, lost and total profit
  let moneyGained = amountOfFans * ticketPrice * gamesPlayed;
  let moneySpent = (playerWage + coachWage) * gamesPlayed;
  let profit = moneyGained - moneySpent;
  
  // Data given back to user
  document.getElementById('surfaceArea').innerHTML = 'The surface area of your tetrahedron is ' + surfaceArea.toFixed(2) + 'cm²'
  document.getElementById('volume').innerHTML = 'The volume of your tetrahedron is ' + volume.toFixed(2) + 'cm<sup>3</sup>'
  document.getElementById('surfaceArea').innerHTML = 'The surface area of your tetrahedron is ' + surfaceArea.toFixed(2) + 'cm²'
}

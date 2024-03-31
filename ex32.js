"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username
let current_users = ["admin", "amna12", "sana34", "aqsa56", "sara78"];
let new_users = ["amna12", "fatima", "yasmeen"];
for (let i = 0; i <= new_users.length; i++) {
    if ((new_users[i] !== current_users[i]))
        console.log('you will need to enter a new username.');
    else
        console.log('');
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let username1 = ['ali'];
if (username1.length == 0)
    console.log('We need to find some users!');
else if (username1.includes('admin'))
    console.log('Hello admin, would you like to see a status report?');
else
    console.log('Hello', username1, 'thank you for logging in again.');

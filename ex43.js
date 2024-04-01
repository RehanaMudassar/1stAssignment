"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
let magician = ["cooperfield", "david blaine", "hary"];
let new_magician = great_magician(magician);
function show_magician(magician) {
    for (let i = 0; i < 3; i++)
        console.log(magician[i]);
}
function great_magician(magician) {
    for (let i = 0; i < 3; i++)
        console.log(magician[i], 'The Great');
}
//function call
show_magician(magician);

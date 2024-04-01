//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician = ["cooperfield","david blaine","hary"]

function show_magicians(magician:string){
    for(let i=0; i<3; i++)
    console.log(magician[i],'The Great');
}

//function call
show_magicians(magician);
"use strict";
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing 
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_name, tracks) {
    let album = {
        artist_name,
        album_name,
        tracks
    };
    return album;
}
let first_album = make_album('Amna', 'abc', 2);
console.log(first_album);
let second_album = make_album('Ammara', 'xyz', 5);
console.log(second_album);
let third_album = make_album('Aina', 'qwerty', 8);
console.log(third_album);

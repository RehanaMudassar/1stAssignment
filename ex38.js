"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan.
function describe_city(city, country = "Pakistan") {
    console.log(city, 'is in', country);
}
//function call
describe_city("karachi");
describe_city("makkah", "saudi arabia");
describe_city("napoli", "italy");
describe_city("brisbane", "australia");

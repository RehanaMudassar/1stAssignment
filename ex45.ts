//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function make_car(car_model:string, manufacturer:string, option: {color:string,year:number})
{ 
let car_info = {
    car_model ,
    manufacturer ,
    option
};
//console.log(car_info.car_model,car_info.manufacturer);
 
}


let t= make_car('yaris','toyota',{color: 'red', year:2019});
console.log(t);
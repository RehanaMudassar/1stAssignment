//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let car = 'subaru';
//equality operator 
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
//inequality operator
console.log("Is car != 'toyota'? I predict false.")
console.log(car == 'toyota')
//to lower case 
let car1='TOYOTA';
console.log('lower case letters' , car1.toLowerCase());
//and operator
if(car && car1 =='honda')
{
    console.log('treu car is subaru');

} else
//OR operator
console.log('car is neither subaru nor toyota');
if(car || car1 =='toyota')
{
    console.log('car is toyota');

} else
console.log('car is neither subaru nor toyota');
//Test whether an item is in a array
let arr =["toyota","honda0","mazda"]
console.log('car is in the list', arr.includes('mazda'));
//Test whether an item is not in a array
console.log('car is not in list', arr.includes('Wagon-R'))
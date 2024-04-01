//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
let sandwich = ["meat","salad","Mayo"]
function make_sandwich(items: string){
console.log('customer want',items,'sandwich in order');
}
make_sandwich("cheese");
make_sandwich("veggie");
make_sandwich("beef pattie");
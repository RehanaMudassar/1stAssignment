//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a dif

function make_shirt( size="Large", text="i love typescript") 
{
console.log('the size of shirt is ',size,'and ',text);
}
 
make_shirt();
make_shirt("medium","i love typescript");
make_shirt("small","default message");
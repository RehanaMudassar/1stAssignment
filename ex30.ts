//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let username = ["admin","Tahira12","Eshaal23","Sheharyar27","Shaheer17"]
//for(let i=0;i<=username.length;i++)
    if(username.includes('admin'))
    {
    console.log('Hello admin, would you like to see a status report?');}
    else
{
    console.log('Hello', username, 'thank you for logging in again.');   
}

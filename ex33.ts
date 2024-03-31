//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let ordinal_num = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<ordinal_num.length; i++)
{
    if (ordinal_num[i] === 1)
    console.log(ordinal_num[i],'st');
    else if (ordinal_num[i] === 2)
    console.log(ordinal_num[i],'nd');
    else if (ordinal_num[i] === 3)
    console.log(ordinal_num[3],'rd');
else
//for(let i=3; i<ordinal_num.length; i++)
console.log(ordinal_num[i], 'th');
}
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guestlist = ["komal", "Tahira","lubna"]
let newguest="Shehraam";
//adding guest to the start of list
guestlist.unshift("rehana");
//adding guest to the middle of list
guestlist.splice(2,0,"Sheharyar");
//adding guest to the end of list
guestlist.push(newguest);
for(let i=0;i< guestlist.length;i++)
console.log('I would like to invite', guestlist[i]);
console.log('We have found a bigger table for dinner');
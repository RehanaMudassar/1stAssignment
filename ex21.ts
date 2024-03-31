//think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
interface Person {
    name: string;
    age: number;
  }
   
  function greet(person: Person) {
    return "Welcome Mr/Ms " + person.name;
  }
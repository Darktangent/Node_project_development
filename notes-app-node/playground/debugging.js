var person={
    name: "Rohan"
}
person.age=25
debugger;
person.name="Mike"
console.log(person)
//to enter debug - node inspect filename
//list(number of lines to inspect)
//n to go to the next line
//c to continue on till the program completes
//to evaluate state and leave debug type repl
//in repl we can view app as it currently stand
//we can access variable value by typing the name and see their current value as it i8s currently
//to go to a point we can place debugger in our code and directly go there
// to use chrome dev tools we can use node --inspect-brk filename and then chrome://inspect/#devices
// 

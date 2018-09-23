var square = (x) => {
    var result = x * x
    return result
}
console.log(square(81))

var user = {
    name: "Rohan",
    sayHi: () => {
        console.log(`hi. I'm ${this.name}`)
    },
    sayHiAlt() {
        console.log(arguments)
        console.log(`hi. I'm ${this.name}`)
    }
}
user.sayHiAlt()
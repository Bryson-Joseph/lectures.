function sayHello() {}
const player = {
    name: "Jeff",
    sayHello: function(otherPersonsName, age) {
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

player.sayHello("Riele");
player.sayHello("Piper");
//
const EventEmitter = require("events")
const event = new EventEmitter();

event.on("SayMyName", () => {
    console.log("Myself Ujjwal")
});

event.emit("SayMyName");
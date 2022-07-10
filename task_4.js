function Electro (name) {
    this.turnOn = "Yes",
    this.name = name
}

Electro.prototype.getPower = function(power) {
    console.log(`Power is ${power} W`)
}

function ElectroType(name, simple) {
    this.name = name,
    this.simple = simple,
    this.advanced = advanced
}

ElectroType.prototype = new Electro()

const lamp = new ElectroType('lamp', 'simple');
const PC = new ElectroType('PC', 'advanced');

lamp.getPower(10);
PC.getPower(150);

console.log(lamp);
console.log(PC);
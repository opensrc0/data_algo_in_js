var BulbSize = { "SMALL": 0, "MEDIUM": 1, "LARGE": 2 }
Object.freeze(BulbSize)

//Constructor
function Bulb() {
    //Instance Variables 
    this.isOn = false;
    this.size = BulbSize.MEDIUM;

    //Class Variables 
    Bulb.TotalBulbCount++;
}
//Class Variables initialization
Bulb.TotalBulbCount = 0;

//Class Method
Bulb.getBulbCount = function () {
    return Bulb.TotalBulbCount;
};

//Instance Method
Bulb.prototype.turnOn = function () {
    this.isOn = true;
};

//Instance Method
Bulb.prototype.turnOff = function () {
    this.isOn = false;
};

//Instance Method
Bulb.prototype.isOnFun = function () {
    return this.isOn;
};

var AdvanceBulb = function () {
    Bulb.call(this);
    this.intensity = 0;
}

AdvanceBulb.prototype.setIntersity = function (i) {
    this.intensity = i;
};

var b = new Bulb();
console.log("Bulb count :" + Bulb.getBulbCount());
console.log("Bulb Size :" + b.size);
b.size = BulbSize.SMALL;
console.log("Bulb Size :" + b.size);
console.log("bulb is on return : " + b.isOnFun());
b.turnOn();
console.log("bulb is on return : " + b.isOnFun());
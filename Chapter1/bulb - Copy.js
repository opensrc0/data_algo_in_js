var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bulb = (function () {
    function Bulb() {
        this.isOn = false;
        Bulb.TotalBulbCount++;
    }
    Bulb.getBulbCount = function () {
        return Bulb.TotalBulbCount;
    };
    Bulb.prototype.turnOn = function () {
        this.isOn = true;
    };
    Bulb.prototype.turnOff = function () {
        this.isOn = false;
    };
    Bulb.prototype.isOnFun = function () {
        return this.isOn;
    };
    Bulb.TotalBulbCount = 0;
    return Bulb;
}());
Bulb["__class"] = "Bulb";
var Bulb;
(function (Bulb) {
    (function (BulbSize) {
        BulbSize[BulbSize["SMALL"] = 0] = "SMALL";
        BulbSize[BulbSize["MEDIUM"] = 1] = "MEDIUM";
        BulbSize[BulbSize["LARGE"] = 2] = "LARGE";
    })(Bulb.BulbSize || (Bulb.BulbSize = {}));
    var BulbSize = Bulb.BulbSize;
})(Bulb || (Bulb = {}));
var AdvanceBulb = (function (_super) {
    __extends(AdvanceBulb, _super);
    function AdvanceBulb() {
        _super.call(this);
        this.intensity = 0;
    }
    AdvanceBulb.prototype.setIntersity = function (i) {
        this.intensity = i;
    };
    return AdvanceBulb;
}(Bulb));
AdvanceBulb["__class"] = "AdvanceBulb";
var BulbDemo = (function () {
    function BulbDemo() {
    }
    BulbDemo.main = function (args) {
        var b = new Bulb();
        b.size = Bulb.BulbSize.MEDIUM;
        console.info("Bulb Size :" + b.size);
        console.info("bulb is on return : " + b.isOnFun());
        b.turnOn();
        console.info("bulb is on return : " + b.isOnFun());
    };
    return BulbDemo;
}());
BulbDemo["__class"] = "BulbDemo";
BulbDemo.main(null);
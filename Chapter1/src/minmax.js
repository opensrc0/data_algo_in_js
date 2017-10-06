/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
var MinMaxValueTest = (function () {
    function MinMaxValueTest() {
    }
    MinMaxValueTest.main = function (args) {
        var maxByte = javaemul.internal.ByteHelper.MAX_VALUE;
        var minByte = javaemul.internal.ByteHelper.MIN_VALUE;
        var maxShort = javaemul.internal.ShortHelper.MAX_VALUE;
        var minShort = javaemul.internal.ShortHelper.MIN_VALUE;
        var maxInteger = javaemul.internal.IntegerHelper.MAX_VALUE;
        var minInteger = javaemul.internal.IntegerHelper.MIN_VALUE;
        var maxLong = javaemul.internal.LongHelper.MAX_VALUE;
        var minLong = javaemul.internal.LongHelper.MIN_VALUE;
        var maxFloat = javaemul.internal.FloatHelper.MAX_VALUE;
        var minFloat = javaemul.internal.FloatHelper.MIN_VALUE;
        var maxDouble = javaemul.internal.DoubleHelper.MAX_VALUE;
        var minDouble = javaemul.internal.DoubleHelper.MIN_VALUE;
        console.info("Range of byte :: " + minByte + " to " + maxByte + ".");
        console.info("Range of short :: " + minShort + " to " + maxShort + ".");
        console.info("Range of integer :: " + minInteger + " to " + maxInteger + ".");
        console.info("Range of long :: " + minLong + " to " + maxLong + ".");
        console.info("Range of float :: " + minFloat + " to " + maxFloat + ".");
        console.info("Range of double :: " + minDouble + " to " + maxDouble + ".");
    };
    return MinMaxValueTest;
}());
MinMaxValueTest["__class"] = "MinMaxValueTest";
MinMaxValueTest.main(null);
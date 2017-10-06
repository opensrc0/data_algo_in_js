    function Stack(capacity) {
        var _this = this;
        this.__top = -1;
        if (((typeof capacity === 'number') || capacity === null)) {
            var __args = Array.prototype.slice.call(arguments);
            this.__top = -1;
            this.minCapacity = 0;
            this.maxCapacity = 0;
            (function () {
                _this.data = new Array(capacity);
                _this.maxCapacity = _this.minCapacity = capacity;
            })();
        }
        else if (capacity === undefined) {
            var __args = Array.prototype.slice.call(arguments);
            {
                var __args_1 = Array.prototype.slice.call(arguments);
                var capacity_1 = Stack.MIN_CAPACITY;
                this.__top = -1;
                this.minCapacity = 0;
                this.maxCapacity = 0;
                (function () {
                    _this.data = new Array(capacity_1);
                    _this.maxCapacity = _this.minCapacity = capacity_1;
                })();
            }
            (function () {
                _this.maxCapacity = _this.minCapacity = Stack.MIN_CAPACITY;
            })();
        }
        else
            throw new Error('invalid overload');
    }
    Stack.prototype.size = function () {
        return (this.__top + 1);
    };
    Stack.prototype.isEmpty = function () {
        return (this.__top === -1);
    };
    Stack.prototype.push = function (value) {
        if (this.size() === this.maxCapacity) {
            console.info("size dubbelled");
            var newData = new Array(this.maxCapacity * 2);
            java.lang.System.arraycopy(this.data, 0, newData, 0, this.maxCapacity);
            this.data = newData;
            this.maxCapacity = this.maxCapacity * 2;
        }
        this.__top++;
        this.data[this.__top] = value;
    };
    Stack.prototype.top = function () {
        if (this.isEmpty()) {
            throw new java.lang.IllegalStateException("StackEmptyException");
        }
        return this.data[this.__top];
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new java.lang.IllegalStateException("StackEmptyException");
        }
        var topVal = this.data[this.__top];
        this.__top--;
        if (this.size() === (this.maxCapacity / 2 | 0) && this.maxCapacity > this.minCapacity) {
            console.info("size halfed");
            this.maxCapacity = (this.maxCapacity / 2 | 0);
            var newData = new Array(this.maxCapacity);
            java.lang.System.arraycopy(this.data, 0, newData, 0, this.maxCapacity);
            this.data = newData;
        }
        return topVal;
    };
    Stack.prototype.print = function () {
        for (var i = this.__top; i > -1; i--) {
            java.lang.System.out.print(" " + this.data[i]);
        }
    };
    Stack.main = function (args) {
        var s = new Stack(10);
        for (var i = 1; i <= 100; i++) {
            s.push(i);
        }
        for (var i = 1; i <= 100; i++) {
            s.pop();
        }
        s.print();
    };
    Stack.MIN_CAPACITY = 1000;

Stack.main(null);
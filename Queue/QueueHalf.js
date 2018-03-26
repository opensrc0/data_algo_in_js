function Queue() {
	this.frontIndex = 0;
	this.data = [];
}

Queue.prototype.add = function (value) {
	this.data.push(value);
};

Queue.prototype.remove = function () {
	var value = this.data[this.frontIndex];
	this.frontIndex++;
	if (this.data.length > 0 && this.frontIndex * 2 >= this.data.length) {
		this.data = this.data.slice(this.frontIndex);
		this.frontIndex = 0;
	}
	return value;
};

Queue.prototype.isEmpty = function () {
	return (this.data.length - this.frontIndex) === 0;
};

Queue.prototype.length = function () {
	return (this.data.length - this.frontIndex);
};

var que = new Queue();
for (var i = 0; i < 20; i++) {
	que.add(i);
}
for (var i = 0; i < 22; i++) {
	console.log(que.remove());
}
function TSTNode(d) {
    this.data = d;
    this.isLastChar = false;
    this.left = this.equal = this.right = null;
}

function TST() {
    this.root = null;
}

TST.prototype.insert = function (word) {
    this.root = this.insertUtil(this.root, word, 0);
};

TST.prototype.insertUtil = function (curr, word, wordIndex) {
    if (((curr != null && curr instanceof TSTNode) || curr === null) && ((typeof word === 'string') || word === null) && ((typeof wordIndex === 'number') || wordIndex === null)) {
        if (curr == null)
            curr = new TSTNode(word.charAt(wordIndex));
        if ((word.charAt(wordIndex)).charCodeAt(0) < (curr.data).toString().charCodeAt(0))
            curr.left = this.insertUtil(curr.left, word, wordIndex);
        else if ((word.charAt(wordIndex)).charCodeAt(0) > (curr.data).toString().charCodeAt(0))
            curr.right = this.insertUtil(curr.right, word, wordIndex);
        else {
            if (wordIndex < word.length - 1)
                curr.equal = this.insertUtil(curr.equal, word, wordIndex + 1);
            else
                curr.isLastChar = true;
        }
        return curr;
    }
    else
        throw new Error('invalid overload');
};

TST.prototype.findUtil = function (curr, word, wordIndex) {
    if (((curr != null && curr instanceof TSTNode) || curr === null) && ((typeof word === 'string') || word === null) && ((typeof wordIndex === 'number') || wordIndex === null)) {
        if (curr == null)
            return false;
        if ((word.charAt(wordIndex)).charCodeAt(0) < (curr.data).toString().charCodeAt(0))
            return this.findUtil(curr.left, word, wordIndex);
        else if ((word.charAt(wordIndex)).charCodeAt(0) > (curr.data).toString().charCodeAt(0))
            return this.findUtil(curr.right, word, wordIndex);
        else {
            if (wordIndex === word.length - 1)
                return curr.isLastChar;
            return this.findUtil(curr.equal, word, wordIndex + 1);
        }
    }
    else
        throw new Error('invalid overload');
};

TST.prototype.find = function (word) {
    var ret = this.findUtil(this.root, word, 0);
    if (ret)
        console.log(word + " :: " + " Found ");
    else
        console.log(word + " :: " + "Not Found ");
    return ret;
};

var tt = new TST();
tt.insert("banana");
tt.insert("apple");
tt.insert("mango");
console.log("\nSearch results for apple, banana, grapes and mango :");
tt.find("apple");
tt.find("banana");
tt.find("mango");
tt.find("app");
tt.find("applee");
tt.find("grapes");

/*
Search results for apple, banana, grapes and mango :
TST.js:56 apple ::  Found 
TST.js:56 banana ::  Found 
TST.js:56 mango ::  Found 
TST.js:58 app :: Not Found 
TST.js:58 applee :: Not Found 
TST.js:58 grapes :: Not Found 
*/
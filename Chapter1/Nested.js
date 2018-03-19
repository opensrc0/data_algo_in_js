function OuterClass() {
    //definition of outer class
    function NestedClass() {
      //definition of inner class
    }
    NestedClass.prototype.constructor = NestedClass;
    NestedClass.prototype.demofun = function () {
        console.log('demo function');
    };
}
OuterClass.prototype.constructor = OuterClass;
OuterClass.prototype.demofun = function () {
    console.log('demo function');
};

function LinkedList() {
    //definition of outer class
    function Node() {
        //definition of inner class
        this.value = 0;
        this.next = null;
    }
    Node.prototype.constructor = Node;

    this.head = null;
    this.size = 0;
}
LinkedList.prototype.constructor = LinkedList;



function Tree() {
    //definition of outer class
    function Node() {
        //definition of inner class
        this.value = 0;
        this.lchild = null;
        this.rchild = null;
    }
    Node.prototype.constructor = Node;

    this.root = null;
    this.size = 0;
}
Tree.prototype.constructor = Tree;

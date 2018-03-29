function TreeNode(data, left = null, right = null) {
    this.value = data;
    this.lChild = left;
    this.rChild = right;
}

function Tree() {
    this.root = null;
}

Tree.prototype.levelOrderBinaryTree = function (arr) {
    if (arr != null && arr instanceof Array)
        this.root = this.levelOrderBinaryTreeUtil(arr, 0);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.levelOrderBinaryTreeUtil = function (arr, start) {
    var size = arr.length;
    var curr = new TreeNode(arr[start]);
    var left = 2 * start + 1;
    var right = 2 * start + 2;
    if (left < size)
        curr.lChild = this.levelOrderBinaryTreeUtil(arr, left);
    if (right < size)
        curr.rChild = this.levelOrderBinaryTreeUtil(arr, right);
    return curr;
};

Tree.prototype.printBredthFirst = function () {
    var que = new Queue();
    if (this.root !== null)
        que.add(this.root);

    while (que.isEmpty() === false) {
        temp = que.remove();
        console.log(temp.value);

        if (temp.lChild !== null)
            que.add(temp.lChild);
        if (temp.rChild !== null)
            que.add(temp.rChild);
    }
}

function Queue() {
    this.stk1 = [];
    this.stk2 = [];
}

Queue.prototype.add = function (value) {
    this.stk1.push(value);
};

Queue.prototype.remove = function () {
    var value;
    if (this.stk2.length > 0) {
        return this.stk2.pop();
    }
    while (this.stk1.length > 0) {
        value = this.stk1.pop();
        this.stk2.push(value);
    };
    return this.stk2.pop();
};

Queue.prototype.isEmpty = function () {
    if (this.stk2.length === 0 && this.stk2.length === 0) {
        return true;
    }
    return false;
};

Tree.prototype.printDepthFirst = function () {
    var stk = [];
    if (this.root != null)
        stk.push(this.root);

    while (stk.length !== 0) {
        temp = stk.pop();
        console.log(temp.value);

        if (temp.rChild != null)
            stk.push(temp.rChild);
        if (temp.lChild != null)
            stk.push(temp.lChild);
    }
}


Tree.prototype.insertNode = function (value) {
    if (typeof value === 'number')
        this.root = this.insertNodeUtil(value, this.root);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.insertNodeUtil = function (value, node) {
    if (node == null) {
        node = new TreeNode(value, null, null);
    }
    else {
        if (node.value > value) {
            node.lChild = this.insertNodeUtil(value, node.lChild);
        }
        else {
            node.rChild = this.insertNodeUtil(value, node.rChild);
        }
    }
    return node;
};

Tree.prototype.printPreOrder = function () {
    this.printPreOrderUtil(this.root);
};

Tree.prototype.printPreOrderUtil = function (node) {
    if (node != null) {
        console.log(node.value);
        this.printPreOrderUtil(node.lChild);
        this.printPreOrderUtil(node.rChild);
    }
};

Tree.prototype.nthPreOrder = function (index) {
    var counter = [0];
    if (typeof index === 'number')
        return this.nthPreOrderUtil(this.root, index, counter);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.nthPreOrderUtil = function (node, index, counter) {
    var retval;
    if (node != null) {
        counter[0]++;
        if (counter[0] === index) {
            return (node.value);
        }
        retval = this.nthPreOrderUtil(node.lChild, index, counter);
        if (retval != null)
            return retval;
        retval = this.nthPreOrderUtil(node.rChild, index, counter);
        if (retval != null)
            return retval;
    }
    return null;
};

Tree.prototype.printPostOrder = function () {
    this.printPostOrderUtil(this.root);
};

Tree.prototype.printPostOrderUtil = function (node) {
    if (node != null) {
        this.printPostOrderUtil(node.lChild);
        this.printPostOrderUtil(node.rChild);
        console.log(node.value);
    }
};

Tree.prototype.nthPostOrder = function (index) {
    var counter = [0];
    if (typeof index === 'number')
        return this.nthPostOrderUtil(this.root, index, counter);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.nthPostOrderUtil = function (node, index, counter) {
    var retval;
    if (node != null) {
        retval = this.nthPostOrderUtil(node.lChild, index, counter);
        if (retval != null)
            return retval;
        retval = this.nthPostOrderUtil(node.rChild, index, counter);
        if (retval != null)
            return retval;
        counter[0]++;
        if (counter[0] === index) {
            return (node.value);
        }
    }
    return null;
};

Tree.prototype.printInOrder = function () {
    this.printInOrderUtil(this.root);
};

Tree.prototype.printInOrderUtil = function (node) {
    if (node != null) {
        this.printInOrderUtil(node.lChild);
        console.log(node.value);
        this.printInOrderUtil(node.rChild);
    }
};

Tree.prototype.nthInOrder = function (index) {
    var counter = [0];
    if (typeof index === 'number')
        return this.nthInOrderUtil(this.root, index, counter);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.nthInOrderUtil = function (node, index, counter) {
    var retval;
    if (node != null) {
        retval = this.nthInOrderUtil(node.lChild, index, counter);
        if (retval != null)
            return retval;
        counter[0]++;
        if (counter[0] === index) {
            return (node.value);
        }
        retval = this.nthInOrderUtil(node.rChild, index, counter);
        if (retval != null)
            return retval;

    }
    return null;
};

Tree.prototype.find = function (value) {
    var curr = this.root;
    while ((curr != null)) {
        if (curr.value === value) {
            return true;
        }
        else if (curr.value > value) {
            curr = curr.lChild;
        }
        else {
            curr = curr.rChild;
        }
    }
    return false;
};

Tree.prototype.find2 = function (value) {
    var curr = this.root;
    while ((curr != null && curr.value !== value))
        curr = (curr.value > value) ? curr.lChild : curr.rChild;
    return curr != null;
};

Tree.prototype.findMin = function () {
    var node = this.root;
    if (node == null) {
        throw new Error('Empty tree');
    }
    while ((node.lChild != null)) {
        node = node.lChild;
    };
    return node.value;
};

Tree.prototype.findMax = function () {
    var node = this.root;
    if (node == null) {
        throw new Error('Empty tree');
    }
    while ((node.rChild != null)) {
        node = node.rChild;
    };
    return node.value;
};

Tree.prototype.findMaxCurr = function (curr) {
    if (((curr != null && curr instanceof TreeNode) || curr === null)) {
        var node = curr;
        if (node == null) {
            return null;
        }
        while ((node.rChild != null)) {
            node = node.rChild;
        };
        return node;
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.findMinCurr = function (curr) {
    if (((curr != null && curr instanceof TreeNode) || curr === null)) {
        var node = curr;
        if (node == null) {
            return null;
        }
        while ((node.lChild != null)) {
            node = node.lChild;
        };
        return node;
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.free = function () {
    this.root = null;
};

Tree.prototype.deleteNode = function (value) {
    if (typeof value === 'number')
        this.root = this.deleteNodeUtil(this.root, value);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.deleteNodeUtil = function (node, value) {
    var temp = null;
    if (node != null) {
        if (node.value === value) {
            if (node.lChild == null && node.rChild == null) {
                return null;
            }
            else {
                if (node.lChild == null) {
                    temp = node.rChild;
                    return temp;
                }
                if (node.rChild == null) {
                    temp = node.lChild;
                    return temp;
                }
                var maxNode = this.findMax(node.lChild);
                var maxValue = maxNode.value;
                node.value = maxValue;
                node.lChild = this.deleteNodeUtil(node.lChild, maxValue);
            }
        }
        else {
            if (node.value > value) {
                node.lChild = this.deleteNodeUtil(node.lChild, value);
            }
            else {
                node.rChild = this.deleteNodeUtil(node.rChild, value);
            }
        }
    }
    return node;
};

Tree.prototype.treeDepth = function () {
    return this.treeDepthUtil(this.root);
};

Tree.prototype.treeDepthUtil = function (root) {
    if (root == null)
        return 0;
    else {
        var lDepth = this.treeDepth(root.lChild);
        var rDepth = this.treeDepth(root.rChild);
        if (lDepth > rDepth)
            return lDepth + 1;
        else
            return rDepth + 1;
    }
};

Tree.prototype.isEqual = function (T2) {
    if (T2 instanceof Tree)
        return this.identical(this.root, T2.root);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.identical = function (node1, node2) {
    if (node1 == null && node2 == null)
        return true;
    else if (node1 == null || node2 == null)
        return false;
    else
        return (this.identical(node1.lChild, node2.lChild) && this.identical(node1.rChild, node2.rChild) && (node1.value === node2.value));
};

Tree.prototype.ancestor = function (first, second) {
    if ((typeof first === 'number') && (typeof second === 'number')) {
        if (first > second) {
            var temp = first;
            first = second;
            second = temp;
        }
        return this.ancestorUtil(this.root, first, second);
    }
    else {
        throw new Error('invalid input arguments');
    }
};

Tree.prototype.ancestorUtil = function (curr, first, second) {
    if (curr == null) {
        return null;
    }
    if (curr.value > first && curr.value > second) {
        return this.ancestorUtil(curr.lChild, first, second);
    }
    if (curr.value < first && curr.value < second) {
        return this.ancestorUtil(curr.rChild, first, second);
    }
    return curr;
};

Tree.prototype.copyTree = function () {
    var tree = new Tree();
    tree.root = this.copyTreeUtil(this.root);
    return tree;
};

Tree.prototype.copyTreeUtil = function (curr) {
    var temp;
    if (curr != null) {
        temp = new TreeNode(curr.value);
        temp.lChild = this.copyTreeUtil(curr.lChild);
        temp.rChild = this.copyTreeUtil(curr.rChild);
        return temp;
    }
    else
        return null;
};

Tree.prototype.copyMirrorTree = function () {
    var tree2 = new Tree();
    tree2.root = this.copyMirrorTreeUtil(this.root);
    return tree2;
};

Tree.prototype.copyMirrorTreeUtil = function (curr) {
    var temp;
    if (curr != null) {
        temp = new TreeNode(curr.value);
        temp.rChild = this.copyMirrorTree(curr.lChild);
        temp.lChild = this.copyMirrorTree(curr.rChild);
        return temp;
    }
    else
        return null;
};

Tree.prototype.numNodes = function () {
    return this.numNodesUtil(this.root);
};

Tree.prototype.numNodesUtil = function (curr) {
    if (curr == null)
        return 0;
    else
        return (1 + this.numNodesUtil(curr.rChild) + this.numNodesUtil(curr.lChild));
};

Tree.prototype.numFullNodesBT = function () {
    return this.numFullNodesBTUtil(this.root);
};

Tree.prototype.numFullNodesBTUtil = function (curr) {
    var count;
    if (curr == null)
        return 0;
    count = this.numFullNodesBTUtil(curr.rChild) + this.numFullNodesBTUtil(curr.lChild);
    if (curr.rChild != null && curr.lChild != null)
        count++;
    return count;
};

Tree.prototype.maxLengthPathBT = function () {
    return this.maxLengthPathBTUtil(this.root);
};

Tree.prototype.maxLengthPathBTUtil = function (curr) {
    var max;
    var leftPath;
    var rightPath;
    var leftMax;
    var rightMax;
    if (curr == null)
        return 0;
    leftPath = this.treeDepthUtil(curr.lChild);
    rightPath = this.treeDepthUtil(curr.rChild);
    max = leftPath + rightPath + 1;
    leftMax = this.maxLengthPathBTUtil(curr.lChild);
    rightMax = this.maxLengthPathBTUtil(curr.rChild);
    if (leftMax > max)
        max = leftMax;
    if (rightMax > max)
        max = rightMax;
    return max;
};

Tree.prototype.numLeafNodes = function () {
    return this.numLeafNodesUtil(this.root);
};

Tree.prototype.numLeafNodesUtil = function (curr) {
    if (curr == null)
        return 0;
    if (curr.lChild == null && curr.rChild == null)
        return 1;
    else
        return (this.numLeafNodesUtil(curr.rChild) + this.numLeafNodesUtil(curr.lChild));
};


Tree.prototype.printAllPath = function () {
    var stk = [];
    this.printAllPathUtil(this.root, stk);
}

Tree.prototype.printAllPathUtil = function (curr, stk) {
    if (curr == null)
        return;

    stk.push(curr.value);

    if (curr.lChild == null && curr.rChild == null) {
        console.log(stk);
        stk.pop();
        return;
    }

    this.printAllPathUtil(curr.rChild, stk);
    this.printAllPathUtil(curr.lChild, stk);
    stk.pop();
}



Tree.prototype.sumAllBT = function () {
    return this.sumAllBTUtil(this.root);
};

Tree.prototype.sumAllBTUtil = function (curr) {
    var sum;
    var leftSum;
    var rightSum;
    if (curr == null)
        return 0;
    rightSum = this.sumAllBTUtil(curr.rChild);
    leftSum = this.sumAllBTUtil(curr.lChild);
    sum = rightSum + leftSum + curr.value;
    return sum;
};

Tree.prototype.isBST3 = function (root) {
    if (root == null)
        return true;
    if (root.lChild != null && this.findMax(root.lChild).value > root.value)
        return false;
    if (root.rChild != null && this.findMin(root.rChild).value <= root.value)
        return false;
    return (this.isBST3(root.lChild) && this.isBST3(root.rChild));
};

Tree.prototype.isBST = function () {
    return this.isBSTUtil(this.root, MIN_VALUE, MAX_VALUE);
};

Tree.prototype.isBSTUtil = function (curr, min, max) {
    if (curr == null)
        return true;
    if (curr.value < min || curr.value > max)
        return false;
    return this.isBSTUtil(curr.lChild, min, curr.value) && this.isBSTUtil(curr.rChild, curr.value, max);
};


Tree.prototype.isBST2 = function () {
    var count = [MIN_VALUE];
    return this.isBST2Util(this.root, count);
};

Tree.prototype.isBST2Util = function (root, count) {
    var ret;
    if (root != null) {
        ret = this.isBST2Util(root.lChild, count);
        if (!ret)
            return false;
        if (count[0] > root.value)
            return false;
        count[0] = root.value;
        ret = this.isBST2Util(root.rChild, count);
        if (!ret)
            return false;
    }
    return true;
};

Tree.prototype.treeToListRec = function () {
    var head = this.treeToListRecUtil(this.root);
    var temp = head;
    return temp;
};

Tree.prototype.treeToListRecUtil = function (curr) {
    var Head = null;
    var Tail = null;
    if (curr == null)
        return null;
    if (curr.lChild == null && curr.rChild == null) {
        curr.lChild = curr;
        curr.rChild = curr;
        return curr;
    }
    if (curr.lChild != null) {
        Head = this.treeToListRecUtil(curr.lChild);
        Tail = Head.lChild;
        curr.lChild = Tail;
        Tail.rChild = curr;
    }
    else
        Head = curr;
    if (curr.rChild != null) {
        var tempHead = this.treeToListRecUtil(curr.rChild);
        Tail = tempHead.lChild;
        curr.rChild = tempHead;
        tempHead.lChild = curr;
    }
    else
        Tail = curr;
    Head.lChild = Tail;
    Tail.rChild = Head;
    return Head;
};

Tree.prototype.lca = function (first, second) {
    var ans = this.lcaUtil(this.root, first, second);
    if (ans != null)
        return ans.value;
    else
        return MIN_VALUE;
};

Tree.prototype.lcaUtil = function (curr, first, second) {
    var left;
    var right;
    if (curr == null)
        return null;
    if (curr.value === first || curr.value === second)
        return curr;
    left = this.lcaUtil(curr.lChild, first, second);
    right = this.lcaUtil(curr.rChild, first, second);
    if (left != null && right != null)
        return curr;
    else if (left != null)
        return left;
    else
        return right;
};
/* fair practive code 
 * banking codes & standerd board of india codes(bcsbi).
 * 
 */
Tree.prototype.lcaBST = function (first, second) {
    if ((typeof first === 'number') && (typeof second === 'number')) {
        return this.lcaBSTUtil(this.root, first, second);
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.lcaBSTUtil = function (curr, first, second) {
    if (curr == null) {
        return MAX_VALUE;
    }
    if (curr.value > first && curr.value > second) {
        return this.lcaBSTUtil(curr.lChild, first, second);
    }
    if (curr.value < first && curr.value < second) {
        return this.lcaBSTUtil(curr.rChild, first, second);
    }
    return curr.value;
};

Tree.prototype.trimOutsideRange = function (min, max) {
    if ((typeof min === 'number') && (typeof max === 'number')) {
        this.trimOutsideRangeUtil(this.root, min, max);
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.trimOutsideRangeUtil = function (curr, min, max) {
    if (curr == null)
        return null;
    curr.lChild = this.trimOutsideRangeUtil(curr.lChild, min, max);
    curr.rChild = this.trimOutsideRangeUtil(curr.rChild, min, max);
    if (curr.value < min) {
        return curr.rChild;
    }
    if (curr.value > max) {
        return curr.lChild;
    }
    return curr;
};

Tree.prototype.printInRange = function (min, max) {
    if ((typeof min === 'number') && (typeof max === 'number')) {
        this.printInRangeUtil(this.root, min, max);
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.printInRangeUtil = function (root, min, max) {
    if (root == null)
        return;
    this.printInRangeUtil(root.lChild, min, max);
    if (root.value >= min && root.value <= max)
        console.log(root.value + " ");
    this.printInRangeUtil(root.rChild, min, max);
};

Tree.prototype.floorBST = function (val) {
    var curr = this.root;
    var floor = MAX_VALUE;
    while ((curr != null)) {
        if (curr.value === val) {
            floor = curr.value;
            break;
        }
        else if (curr.value > val) {
            curr = curr.lChild;
        }
        else {
            floor = curr.value;
            curr = curr.rChild;
        }
    };
    return floor;
};

Tree.prototype.ceilBST = function (val) {
    var curr = this.root;
    var ceil = MIN_VALUE;
    while ((curr != null)) {
        if (curr.value === val) {
            ceil = curr.value;
            break;
        }
        else if (curr.value > val) {
            ceil = curr.value;
            curr = curr.lChild;
        }
        else {
            curr = curr.rChild;
        }
    };
    return ceil;
};

Tree.prototype.findMaxBT = function () {
    var ans = this.findMaxBTUtil(this.root);
    return ans;
};

Tree.prototype.findMaxBTUtil = function (curr) {
    var left;
    var right;
    if (curr == null)
        return javaemul.internal.IntegerHelper.MIN_VALUE;
    var max = curr.value;
    left = this.findMaxBTUtil(curr.lChild);
    right = this.findMaxBTUtil(curr.rChild);
    if (left > max)
        max = left;
    if (right > max)
        max = right;
    return max;
};

Tree.prototype.searchBT = function (root, value) {
    var left;
    var right;
    if (root == null)
        return false;
    if (root.value === value)
        return true;
    left = this.searchBT(root.lChild, value);
    if (left)
        return true;
    right = this.searchBT(root.rChild, value);
    if (right)
        return true;
    return false;
};

Tree.prototype.createBinaryTree = function (arr) {
    if (arr != null && arr instanceof Array) {
        this.root = this.createBinaryTreeUtil(arr, 0, arr.length - 1);
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.createBinaryTreeUtil = function (arr, start, end) {
    var curr = null;
    if (start > end)
        return null;
    var mid = Math.floor((start + end) / 2);
    curr = new TreeNode(arr[mid]);
    curr.lChild = this.createBinaryTreeUtil(arr, start, mid - 1);
    curr.rChild = this.createBinaryTreeUtil(arr, mid + 1, end);
    return curr;
};

var t = new Tree();
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
t.levelOrderBinaryTree(arr);
t.printAllPath();
t.printBredthFirst();
t.printDepthFirst();
t.printPreOrder();
console.log("========" + t.nthPreOrder(4));
t.printPostOrder();
console.log("========" + t.nthPostOrder(4));
t.printInOrder();
console.log("========" + t.nthInOrder(4));

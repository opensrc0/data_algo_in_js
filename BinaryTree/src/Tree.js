function Tree() {
    this.root = null;

    function Node(v, l, r) {
        if (((typeof v === 'number')) && ((l != null && l instanceof Tree.Node) || l === null) && ((r != null && r instanceof Tree.Node) || r === null)) {
            this.value = v;
            this.lChild = l;
            this.rChild = r;
        }
        else if (((typeof v === 'number')) && l === undefined && r === undefined) {
            this.value = v;
            this.lChild = null;
            this.rChild = null;
        }
        else
            throw new Error('invalid input arguments');
    }
    Tree.Node = Node;
}

Tree.prototype.levelOrderBinaryTree = function (arr) {
    if (arr != null && arr instanceof Array)
        this.root = this.levelOrderBinaryTreeUtil(arr, 0);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.levelOrderBinaryTreeUtil = function (arr, start) {
    var size = arr.length;
    var curr = new Tree.Node(arr[start]);
    var left = 2 * start + 1;
    var right = 2 * start + 2;
    if (left < size)
        curr.lChild = this.levelOrderBinaryTreeUtil(arr, left);
    if (right < size)
        curr.rChild = this.levelOrderBinaryTreeUtil(arr, right);
    return curr;
};


Tree.prototype.PrintBredthFirst = function() {
	var que = new Queue();
	if (this.root !== null)
		que.add(this.root);

	while (que.isEmpty() === false) {
		temp = que.remove();
		console.info(temp.value);

		if (temp.lChild !== null)
			que.add(temp.lChild);
		if (temp.rChild !== null)
			que.add(temp.rChild);
	}
}

Tree.prototype.PrintDepthFirst = function() {
	var stk = [];
	if (this.root != null)
		stk.push(this.root);

	while (stk.length !== 0) {
		temp = stk.pop();
		console.info(temp.value);

		if (temp.lChild != null)
			stk.push(temp.lChild);
		if (temp.rChild != null)
			stk.push(temp.rChild);
	}
}


Tree.prototype.InsertNode = function (value) {
    if (typeof value === 'number')
        this.root = this.InsertNodeUtil(value, this.root);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.InsertNodeUtil = function (value, node) {
    if (node == null) {
        node = new Tree.Node(value, null, null);
    }
    else {
        if (node.value > value) {
            node.lChild = this.InsertNodeUtil(value, node.lChild);
        }
        else {
            node.rChild = this.InsertNodeUtil(value, node.rChild);
        }
    }
    return node;
};

Tree.prototype.PrintPreOrder = function () {
    this.PrintPreOrderUtil(this.root);
};

Tree.prototype.PrintPreOrderUtil = function (node) {
    if (node != null) {
        console.info(node.value);
        this.PrintPreOrderUtil(node.lChild);
        this.PrintPreOrderUtil(node.rChild);
    }
};

Tree.prototype.NthPreOrder = function (index) {
    var counter = [0];
    if (typeof index === 'number')
        return this.NthPreOrderUtil(this.root, index, counter);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.NthPreOrderUtil = function (node, index, counter) {
    var retval;
	if (node != null) {
        counter[0]++;
        if (counter[0] === index) {
            return (node.value);
        }
        retval = this.NthPreOrderUtil(node.lChild, index, counter);
        if(retval != null)
        	return retval;
        retval = this.NthPreOrderUtil(node.rChild, index, counter);
        if(retval != null)
        	return retval;
    }
	return null;
};

Tree.prototype.PrintPostOrder = function () {
    this.PrintPostOrderUtil(this.root);
};

Tree.prototype.PrintPostOrderUtil = function (node) {
    if (node != null) {
        this.PrintPostOrderUtil(node.lChild);
        this.PrintPostOrderUtil(node.rChild);
        console.info(node.value);
    }
};

Tree.prototype.NthPostOrder = function (index) {
    var counter = [0];
	if (typeof index === 'number')
        return this.NthPostOrderUtil(this.root, index, counter);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.NthPostOrderUtil = function (node, index, counter) {
    var retval;
	if (node != null) {
        retval = this.NthPostOrderUtil(node.lChild, index, counter);
        if(retval != null)
        	return retval;
        retval = this.NthPostOrderUtil(node.rChild, index, counter);
        if(retval != null)
        	return retval;
        counter[0]++;
        if (counter[0] === index) {
            return (node.value);
        }
    }
    return null;
};

Tree.prototype.PrintInOrder = function () {
    this.PrintInOrderUtil(this.root);
};

Tree.prototype.PrintInOrderUtil = function (node) {
    if (node != null) {
        this.PrintInOrderUtil(node.lChild);
        console.info(node.value);
        this.PrintInOrderUtil(node.rChild);
    }
};

Tree.prototype.NthInOrder = function (index) {
    var counter=[0];
	if (typeof index === 'number')
        return this.NthInOrderUtil(this.root, index, counter);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.NthInOrderUtil = function (node, index, counter) {
	var retval;
	if (node != null) {
        retval = this.NthInOrderUtil(node.lChild, index, counter);
        if(retval != null)
        	return retval;
        counter[0]++;
        if (counter[0] === index) {
            return(node.value);
        }
        retval = this.NthInOrderUtil(node.rChild, index, counter);
        if(retval != null)
        	return retval;

    }
	return null;
};

Tree.prototype.Find = function (value) {
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

Tree.prototype.Find2 = function (value) {
    var curr = this.root;
    while ((curr != null && curr.value !== value))
        curr = (curr.value > value) ? curr.lChild : curr.rChild;
    return curr != null;
};

Tree.prototype.FindMin = function () {
    var node = this.root;
    if (node == null) {
        throw new Error('Empty tree');
    }
    while ((node.lChild != null)) {
        node = node.lChild;
    };
    return node.value;
};

Tree.prototype.FindMax = function () {
    var node = this.root;
    if (node == null) {
        throw new Error('Empty tree');
    }
    while ((node.rChild != null)) {
        node = node.rChild;
    };
    return node.value;
};

Tree.prototype.FindMaxCurr = function (curr) {
    if (((curr != null && curr instanceof Tree.Node) || curr === null)) {
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

Tree.prototype.FindMinCurr = function (curr) {
    if (((curr != null && curr instanceof Tree.Node) || curr === null)) {
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

Tree.prototype.Free = function () {
    this.root = null;
};

Tree.prototype.DeleteNode = function (value) {
    if (typeof value === 'number')
        this.root = this.DeleteNodeUtil(this.root, value);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.DeleteNodeUtil = function (node, value) {
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
                var maxNode = this.FindMax(node.lChild);
                var maxValue = maxNode.value;
                node.value = maxValue;
                node.lChild = this.DeleteNodeUtil(node.lChild, maxValue);
            }
        }
        else {
            if (node.value > value) {
                node.lChild = this.DeleteNodeUtil(node.lChild, value);
            }
            else {
                node.rChild = this.DeleteNodeUtil(node.rChild, value);
            }
        }
    }
    return node;
};

Tree.prototype.TreeDepth = function () {
    return this.TreeDepthUtil(this.root);
};

Tree.prototype.TreeDepthUtil = function (root) {
    if (root == null)
        return 0;
    else {
        var lDepth = this.TreeDepth(root.lChild);
        var rDepth = this.TreeDepth(root.rChild);
        if (lDepth > rDepth)
            return lDepth + 1;
        else
            return rDepth + 1;
    }
};

Tree.prototype.isEqual = function (T2) {
    if (T2 instanceof Tree)
        return this.Identical(this.root, T2.root);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.Identical = function (node1, node2) {
    if (node1 == null && node2 == null)
        return true;
    else if (node1 == null || node2 == null)
        return false;
    else
        return (this.Identical(node1.lChild, node2.lChild) && this.Identical(node1.rChild, node2.rChild) && (node1.value === node2.value));
};

Tree.prototype.Ancestor = function (first, second) {
    if ((typeof first === 'number') && (typeof second === 'number')) {
        if (first > second) {
            var temp = first;
            first = second;
            second = temp;
        }
        return this.AncestorUtil(this.root, first, second);
    }
    else {
        throw new Error('invalid input arguments');
    }
};

Tree.prototype.AncestorUtil = function (curr, first, second) {
    if (curr == null) {
        return null;
    }
    if (curr.value > first && curr.value > second) {
        return this.AncestorUtil(curr.lChild, first, second);
    }
    if (curr.value < first && curr.value < second) {
        return this.AncestorUtil(curr.rChild, first, second);
    }
    return curr;
};

Tree.prototype.CopyTree = function () {
    var tree = new Tree();
    tree.root = this.CopyTreeUtil(this.root);
    return tree;
};

Tree.prototype.CopyTreeUtil = function (curr) {
    var temp;
    if (curr != null) {
        temp = new Tree.Node(curr.value);
        temp.lChild = this.CopyTreeUtil(curr.lChild);
        temp.rChild = this.CopyTreeUtil(curr.rChild);
        return temp;
    }
    else
        return null;
};

Tree.prototype.CopyMirrorTree = function () {
    var tree2 = new Tree();
    tree2.root = this.CopyMirrorTreeUtil(this.root);
    return tree2;
};

Tree.prototype.CopyMirrorTreeUtil = function (curr) {
    var temp;
    if (curr != null) {
        temp = new Tree.Node(curr.value);
        temp.rChild = this.CopyMirrorTree(curr.lChild);
        temp.lChild = this.CopyMirrorTree(curr.rChild);
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
    leftPath = this.TreeDepthUtil(curr.lChild);
    rightPath = this.TreeDepthUtil(curr.rChild);
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


Tree.prototype.printAllPath = function()
{
	var stk = [];
	this.printAllPathUtil(this.root,stk);
}

Tree.prototype.printAllPathUtil = function(curr, stk)
{
	if(curr == null)
		return;

	stk.push(curr.value);

	if(curr.lChild == null && curr.rChild == null)
	{
		console.info(stk);
		stk.pop();
		return;
	}

	this.printAllPathUtil(curr.rChild,stk);
	this.printAllPathUtil(curr.lChild,stk);
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
    if (root.lChild != null && this.FindMax(root.lChild).value > root.value)
        return false;
    if (root.rChild != null && this.FindMin(root.rChild).value <= root.value)
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
	var count=[MIN_VALUE];
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

Tree.prototype.LCA = function (first, second) {
    var ans = this.LCAUtil(this.root, first, second);
    if (ans != null)
        return ans.value;
    else
        return MIN_VALUE;
};

Tree.prototype.LCAUtil = function (curr, first, second) {
    var left;
    var right;
    if (curr == null)
        return null;
    if (curr.value === first || curr.value === second)
        return curr;
    left = this.LCAUtil(curr.lChild, first, second);
    right = this.LCAUtil(curr.rChild, first, second);
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
Tree.prototype.LcaBST = function (first, second) {
    if ((typeof first === 'number') && (typeof second === 'number')) {
        return this.LcaBSTUtil(this.root, first, second);
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.LcaBSTUtil = function (curr, first, second) {
    if (curr == null) {
        return MAX_VALUE;
    }
    if (curr.value > first && curr.value > second) {
        return this.LcaBSTUtil(curr.lChild, first, second);
    }
    if (curr.value < first && curr.value < second) {
        return this.LcaBSTUtil(curr.rChild, first, second);
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
        console.info(root.value + " ");
    this.printInRangeUtil(root.rChild, min, max);
};

Tree.prototype.FloorBST = function (val) {
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

Tree.prototype.CeilBST = function (val) {
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

Tree.prototype.CreateBinaryTree = function (arr) {
    if (arr != null && arr instanceof Array) {
        this.root = this.CreateBinaryTreeUtil(arr, 0, arr.length - 1);
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.CreateBinaryTreeUtil = function (arr, start, end) {
        var curr = null;
        if (start > end)
            return null;
        var mid = Math.floor((start + end) / 2);
        curr = new Tree.Node(arr[mid]);
        curr.lChild = this.CreateBinaryTreeUtil(arr, start, mid - 1);
        curr.rChild = this.CreateBinaryTreeUtil(arr, mid + 1, end);
        return curr;
};

function main(args) {
    var t = new Tree();
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    t.levelOrderBinaryTree(arr);
    //t.printAllPath();
    //t.PrintBredthFirst();
    t.PrintDepthFirst();
    //t.PrintPreOrder();
    //console.info("========" + t.NthPreOrder(4));
    //t.PrintPostOrder();
    //console.info("========" + t.NthPostOrder(4));
    //t.PrintInOrder();
    //console.info("========" + t.NthInOrder(4));
};

main(null);
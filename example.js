'use strict';

// Define all the nodes and their children.
var article = Node('article');
var waldo = Node('waldo', [],'redAndWhite');
var div = Node('div', [article, waldo]);
var footer = Node('footer');
var header = Node('header');
var body = Node('body', [div, footer, header]);
var meta = Node('meta');
var title = Node('title');
var head = Node('head', [title, meta]);
var html = Node('html', [head, body]);

// using html as the root node, search for a node where node.value = 'waldo'.
var nodeFound = depthFirstSearch(html, 'value', 'waldo');
console.log(nodeFound);

/**
 * Returns an object representing the given node.
 *
 * @param _value. Sets the returned objects' value property or defaults to an empty string.
 * @param _children {Array}. Sets the returned objects' children property or defaults to an empty array.
 * @param _class. Sets the returned objects' class property or defaults to an empty string.
 * @returns an object representing a node.
 */
function Node(_value, _children, _class){
  return {
    value: _value || '',
    class: _class || '',
    children: _children || []
  };
}


/**
 * A stack is a data structure where you add and remove from the same side,
 * the last item in is the first item out (LIFO).
 * A real world analog would be a stack of papers or dishes.
 *
 * @returns an object that represents a stack.
 */
function Stack(){

  var stack = [];

  return {
    // add an item to the stack
    push: function(item){
      return stack.push(item);
    },
    // add an array of items to the stack and returns itself.
    pushMany: function(items){
      stack = stack.concat(items);
      return this;
    },
    // remove and return an item from the stack.
    pop: function(){
      return stack.pop();
    },
    // isEmpty checks if the stack has any items.
    isEmpty: function(){
      return stack.length === 0;
    }
  };
}

/**
 * Searches a tree and returns the first node where node[targetProperty] === targetValue
 *
 * @param startingNode. The root node of the tree
 * @param targetProperty. The node property to compare to targetValue.
 * @param targetValue. The value to search for.
 * @returns If node is found returns node, otherwise it returns null.
 */
function depthFirstSearch(startingNode, targetProperty, targetValue){

  // initialize currentNode to the startingNode
  var currentNode = startingNode;

  // initialize a stack to store the nodes we skip over and check them later.
  var checkLaterStack = Stack();

  // as long as the current node's targetProperty is not our targetValue
  while(currentNode[targetProperty] !== targetValue){

    // if the current node has children, check the child nodes.
    if(currentNode.children.length > 0){

      // since only one node can be checked at a time,
      // if the current node has more than 1 child,
      // push them to the stack so we can check them later.
      if(currentNode.children.length > 1){
        var otherChildren = currentNode.children.slice(1);
        checkLaterStack.pushMany(otherChildren);
      }

      // set the currentNode to it's first child.
      currentNode = currentNode.children[0];

    }else if(!checkLaterStack.isEmpty()){// if the stack is not empty
      //pop the node at the top of the stack
      //and assign it to currentNode.
      currentNode = checkLaterStack.pop();
    } else { // the stack is empty and the currentNode has no children
      return null;
    }
  }

  // found Waldo!
  return currentNode;
}

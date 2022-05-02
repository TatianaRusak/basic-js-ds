const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() { 
    this.topNode = null;
  }

  root() {
    return this.topNode;
    
  }

  add(data) {
    this.topNode = addNodeValue(this.topNode, data);

    function addNodeValue(node, data) { 
      if (!node) { 
        return new Node(data);
      }

      if (node.data === data) { 
        return node;
      }

      if (data < node.data) {
        node.left = addNodeValue(node.lift, data);
      } else { 
        node.right = addNodeValue(node.right, data);
      }

      return node;

    }
  }

  has(data) {
    return searchValueInTree(this.topNode, data);

    function searchValueInTree(node, data) { 

      if (!node) { 
        return false;
      }

      if (node.data === data) { 
        return true;
      }

      if (data < node.data) {
        searchValueInTree(node.left, data);
      } else { 
        searchValueInTree(node.right, data);
      }
    }
  }

  find(data) {

    return findValueInTree(this.topNode, data);

    function findValueInTree(node, data) {

      if (!node) {
        return null;
      }

      if (data === node.data) { 
        return node;
      }

      if (data < node.data) {
        return findValueInTree(node.left, data)
      } else { 
        return findValueInTree(node.right, data)
      }
    }
  }

  remove(data) {
    this.topNode = removeNode(this.topNode, data);

    function removeNode(node, data) { 
      if (!node) { 
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else { 
        if (!node.left && !node.right) {
          return null;
        } 

        if (!node.left) { 
          node = node.right;
          return node;
        }

        if (!node.right) { 
          node = node.left;
          return node;
        }

        // существуют обе ветки

        let minFromRight = node.right;
        while (minFromRight.left) { 
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data)
        return node;
      }
    }
  }

  min() {
    if (!this.topNode) { 
      return
    }

    let node = this.topNode;
    while (node.left) { 
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.topNode) { 
      return;
    }

    let node = this.topNode;
    while (node.right) { 
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
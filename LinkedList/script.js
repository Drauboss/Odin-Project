class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   *
   * @param {any} value - the data
   * @returns {LinkedList} the List
   *
   * adds a new node containing value to the end of the list
   */
  append(value) {
    const node = new Node(value, null);
    this.tail = node;
    if (this.getHead() === null) {
      this.head = node;
    }
    return this;
  }

  /**
   *
   * @param {any} value
   * @returns {LinkedList} the List
   * adds a new node containing value to the start of the list
   */
  prepend(value) {
    const node = new Node(value, this.getHead());
    this.head = node;
    if (this.getTail() === null) {
      this.tail = node;
    }
    return this;
  }

  /**
   * returns the total number of nodes in the list
   *
   */
  size() {
    let size = 0;
    let currNode = this.getHead();

    if (currNode !== null) {
      size++;
      currNode = currNode.nextNode;
    }

    while (currNode !== null) {
      size++;
      currNode = currNode.nextNode;
    }

    return size;
  }

  /**
   * returns the first node in the list
   */
  getHead() {
    return this.head;
  }

  /**
   * returns the last node in the list
   * @returns tail
   */
  getTail() {
    return this.tail;
  }

  /**
   *
   * @param {number} index
   * @returns {Node} the node at index
   * returns the node at the given index
   */
  at(index) {
    if (this.size() === 0) {
      throw Error("list is empty");
    } else if (index >= this.size()) {
      throw Error("index out of bounds");
    }

    try {
      let currNode = this.getHead();

      for (let indexFor = 0; indexFor < index; indexFor++) {
        currNode = currNode.nextNode;
      }

      return currNode;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * removes the last element from the list
   */
  pop() {
    const lastNode = this.getTail();
    this.tail = this.at(this.size() - 2);
    this.at(this.size() - 2).nextNode = null;
    return lastNode;
  }

  /**
   *
   * @param {*} value
   * returns true if the passed in value is in the list and otherwise returns false.
   */
  contains(value) {
    let currNode = this.getHead();

    while (currNode !== null) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.nextNode;
    }

    return false;
  }

  /**
   *
   * @param {*} value
   * returns the index of the node containing value, or null if not found.
   */
  find(value) {
    let currNode = this.getHead();
    let index = 0;

    while (currNode !== null) {
      if (currNode.value === value) {
        return index;
      }
      index++;
      currNode = currNode.nextNode;
    }

    return null;
  }

  /**
   * represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
   */
  toString() {
    let currNode = this.getHead();
    let string = ``;

    if (currNode !== null) {
      if (currNode.nextNode === null) {
        string += `(${currNode.value}) -> null`;
      } else {
        string += `(${currNode.value}) -> `;
      }
      currNode = currNode.nextNode;
    }

    while (currNode !== null) {
      if (currNode.nextNode === null) {
        string += `(${currNode.value}) -> null`;
      } else {
        string += `(${currNode.value}) -> `;
      }
      currNode = currNode.nextNode;
    }

    return string;
  }
}

class Node {
  /**
   *
   * @param {any} value
   * @param {Node} nextNode
   */
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

console.log("Initial state:");
console.log("Head:", list.head);
console.log("Tail:", list.tail);

list.prepend("one");
list.prepend("two");
list.prepend("three");
list.prepend("four");

console.log("\nAfter prepending nodes:");
console.log("Head:", list.head);
console.log("Tail:", list.tail);

list.prepend("six");
console.log("\nAfter prepending another node:");
console.log("Head:", list.head);
console.log("Tail:", list.tail);

console.log("\nSize of the list:", list.size());

console.log("\nList representation:");
console.log(list.toString());

list.pop();
console.log("\nAfter popping the last element:");
console.log("Head:", list.head);
console.log("Tail:", list.tail);

console.log("\nUpdated list representation:");
console.log(list.toString());

console.log("\nDoes the list contain 'one'?", list.contains("one"));

console.log(list.find("two"));

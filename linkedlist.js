class LinkedList {
  constructor() {
    this.length = 0; //the linked list starts with a 0 length
    this.head = null; //the head starts as null since it doesn't have a value
  }
  
  //this finds the node by the index
  _find(index) {
    let node = this.head;
    for (let i=0; i<index; i++) {
      node = node.next;
    }
    return node;
  }

  //insertion
  insert(index, value) {
    //check if there is any error with the index
    if (index < 0 || index > this.length ) {
      throw new Error('Index error');
    }

    const newNode = {
      value
    };

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    else {
      //Finde the node which we want to inset after
      const node = this._find(index - 1);
      newNode.next = node.next;
      node.next = newNode;
    }

    this.length++; //update the length to reflect the added node
  }

  // retrieval
  get(index) {
    //check if there is any error with the index
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    return this._find(index).value;
  }

  //get the middle value
  middle() {
    const center = Math.floor(this.length/2);
    return this._find(center).value;
  }

  //removal
  remove(index) {
    //check if there is any error with the index
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (index == 0) {
      this.head = this.head.next;
    }
    else {
      //find the node before the one we want to remove
      const node = this._find(index - 1);
      node.next = node.next.next;
    }

    this.length--; //update the length to reflect the removed node
  }
}

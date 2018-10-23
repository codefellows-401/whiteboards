'use strict';

function Node(value, next=null) {
  this.value = value;
  this.next = next;
}

class SingleList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(value) {
    let current = this.head;
    let count = 0;
    while(current !== null) {
      count++;
      console.log(count);
      if(current.next) {
        current.next = new Node(value);

      }
      current = current.next;
    }
  }
  // insertBefore(value) {

  // }
  // insertAfter(value) {

  // }
}


module.exports = SingleList;
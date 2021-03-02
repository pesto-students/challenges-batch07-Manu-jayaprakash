import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    let cNode = this.head;
    while(cNode != null && cNode.next != null){
      cNode = cNode.next;
    }
    if(this.head == null){
      this.head = new LinkListNode(value);
    }else{
      cNode.next = new LinkListNode(value);
    }
  }

  delete(value) {
    if (this.head.value == value) {
      this.head = this.head.next;
      return true;
    }

    let node = this.head;

    while (node) {
      if (node.next && node.next.value == value) {
        node.next = node.next.next;
        return true;
      }
      node = node.next;
    }

    return false;
  }

  traverse() {
    let cNode = this.head;
    while (cNode) {
      cNode = cNode.next;
    }
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  length() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter += 1;
      node = node.next;
    }
    return counter;
  }
}

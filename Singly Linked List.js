// Single Linked List
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let n = new Node(val);

    if (!this.head) {
      this.head = n;
      this.tail = this.head;
    } else {
      this.tail.next = n;
      this.tail = n;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      console.log("list is empty");
    } else if (this.length === 1) {
      console.log(`${this.head.value} has been removed.`);
      this.head = null;
      this.tail = null;
      this.length = null;
    } else {
      let cur = this.head;
      let temp = cur.next;

      while (cur && temp) {
        if (!temp.next) {
          // console.log(`Now at ${cur.value}. Next is ${temp.value}. That is the tail.`)
          cur.next = null;
          this.tail = cur;
          this.length--;
          console.log(`${temp.value} has been removed`);
          temp = temp.next;
        } else {
          // console.log(`Now at ${cur.value}. Next exists.`)
          cur = temp;
          temp = temp.next;
        }
      }

      return this;
    }
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    let n = new Node(val);

    if (!this.head) {
      this.head = n;
      this.tail = this.head;
    } else {
      n.next = this.head;
      this.head = n;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      if (idx === i) return temp;
      temp = temp.next;
    }
  }

  set(idx, val) {
    let n = this.get(idx);
    if (n) {
      n.value = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val); // insert at beginning. convert returned value into a boolean
    if (idx === this.length) return !!this.push(val); //insert at end. convert returned value into a boolean

    let n = new Node(val);
    let prev = this.get(idx - 1);
    if (prev) {
      let temp = prev.next;
      n.next = temp;
      prev.next = n;
      this.length++;
      return true;
    }
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    let prev = this.get(idx - 1);
    let temp = prev.next;
    prev.next = temp.next;
    this.length--;
    return temp;
  }

  reverse() {
    let n = this.head;
    this.head = this.tail;
    this.tail = n;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = n.next;
      n.next = prev;
      prev = n;
      n = next;
    }
    return this;
  }
  rotate(place) {
    if (!this.head) return undefined;
    if (place === 0 || place >= this.length || place <= -this.length)
      return this;

    place = place % this.length;

    // Convert negative place to positive place
    if (place < 0) {
      place = place + this.length;
    }

    let tail = this.head;
    // Move 'tail' pointer to the place where rotation will happen
    while (tail.next !== null && place > 1) {
      tail = tail.next;
      place--;
    }

    // Set new head and adjust pointers to rotate the list
    const newHead = tail.next;
    tail.next = null;
    this.tail.next = this.head;
    this.head = newHead;
    this.tail = tail;

    return this;
  }
}

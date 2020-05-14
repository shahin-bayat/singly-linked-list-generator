"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new ListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new ListNode(value);
        // current tail's next should point to the newNode
        // this.tail points to this.head here
        this.tail.next = newNode;
        // new tail will be the newNode
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new ListNode(value);
        const previousNode = this.lookup(index - 1);
        const nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
    }
    delete(index) {
        const previous = this.lookup(index - 1);
        // can never be null because of if check
        const garbageNode = previous.next;
        previous.next = garbageNode.next;
        this.length--;
    }
    lookup(index) {
        if (index < 0) {
            return this.head;
        }
        else if (index >= this.length) {
            return this.tail;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            if (currentNode.next === null) {
                return this.tail;
            }
            else {
                currentNode = currentNode.next;
                counter++;
            }
        }
        return currentNode;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }
}

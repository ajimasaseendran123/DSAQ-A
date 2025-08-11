class Node {
    constructor(newValue) {
        this.value = newValue;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    printLinkedList() {
        let current = this.head;
        let value = '';
        while (current !== null) {
            value += current.value + ",";
            current = current.next;
        }
        console.log(value);
    }
    addNewNode(newValue) {
        const newNode = new Node(newValue);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return;
    }
    addFirst(newValue) {
        const newNode = new Node(newValue);
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    addLast(newValue) {
        const newNode = new Node(newValue);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return;
    }
    addInIndex(index, val) {

        if (index === 0) {
            addFirst(val);
            return;
        } else if (index = this.size) {
            addLast(val);
            return;
        } else {
            const newNode = new Node(val);
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            return;
        }
    }
}

const list = new LinkedList();
list.addNewNode(20);
list.addFirst(300);
list.addLast(40);
list.addInIndex(2, 50);
list.printLinkedList()    
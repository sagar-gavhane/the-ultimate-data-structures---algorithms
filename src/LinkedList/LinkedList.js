import _ from 'lodash'

export class Node {
  constructor(value, next = null) {
    if (!value) {
      throw new Error('NoValueReceivedException')
    }

    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  isEmpty = () => this.first === null

  addLast = (item) => {
    const node = new Node(item)

    if (this.isEmpty()) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    this.size++
  }

  addFirst = (item) => {
    const node = new Node(item)

    if (this.isEmpty()) {
      this.first = node
      this.last = node
    } else {
      node.next = this.first
      this.first = node
    }
    this.size++
  }

  indexOf = (item) => {
    let index = 0
    let current = this.first

    while (current !== null) {
      if (current.value === item) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  contains = (item) => this.indexOf(item) !== -1

  removeFirst = () => {
    if (this.isEmpty()) {
      throw new Error('NoSuchElementException')
    }

    if (this.first === this.last) {
      this.first = null
      this.last = null
      this.size--
      return null
    }

    const second = this.first.next
    this.first.next = null
    this.first = second
    this.size--
  }

  removeLast = () => {
    if (this.isEmpty()) {
      throw new Error('NoSuchElementException')
    }

    if (_.isEqual(this.first, this.last)) {
      this.first = null
      this.last = null
      this.size--
      return
    }

    const previous = this.getPreviousNode(this.last)
    this.last = previous
    this.last.next = null
    this.size--
  }

  getPreviousNode = (node) => {
    let current = this.first
    while (current !== null) {
      if (current.next === node) {
        return current
      }
      current = current.next
    }
  }

  toArray = () => {
    let arr = []
    let current = this.first

    while (current !== null) {
      arr.push(current.value)
      current = current.next
    }

    return arr.toString().replace(/,/gi, '->')
  }

  reverse = () => {
    let previous = this.first
    let current = this.first.next

    while (current !== null) {
      let next = current.next
      current.next = previous
      previous = current
      current = next
    }

    this.last = this.first
    this.last.next = null
    this.first = previous
  }

  getKthNodeFromEnd = (k) => {
    if (this.isEmpty()) {
      throw new Error('list is empty')
    }

    let a = this.first
    let b = this.first

    for (let i = 0; i < k - 1; i++) {
      b = b.next

      if (b === null) {
        throw new Error('k size is greater then linked list')
      }
    }

    while (b !== this.last) {
      a = a.next
      b = b.next
    }

    return a.value
  }
}

export default LinkedList

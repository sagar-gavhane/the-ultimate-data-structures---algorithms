// e.g. stack of books
// LIFO - Last In First Out

// stack operations
// push() -> o(1)
// pop() -> o(1)
// peek() -> o(1)
// isEmpty() -> o(1)

class Stack {
  storage = []

  push = (item) => this.storage.push(item)

  pop = () => {
    if (this.isEmpty()) {
      throw new Error('IllegalStateException')
    }
    return this.storage.pop()
  }

  peek = () => {
    if (this.isEmpty()) {
      throw new Error('IllegalStateException')
    }

    return this.storage[this.storage.length - 1]
  }

  isEmpty = () => this.storage.length === 0

  size = () => this.storage.length

  toString = () => this.storage.toString()
}

export default Stack

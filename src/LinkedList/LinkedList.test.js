import LinkedList, { Node } from './LinkedList'

describe('LinkedList', () => {
  it('should be validate node value & next property', () => {
    const node = new Node(10)

    expect(node.value).toBe(10)
    expect(node.next).toBe(null)
  })

  it('should be validate LinkedList operations', () => {
    const linkedList = new LinkedList()

    linkedList.addFirst(10)
    expect(linkedList.first.value).toBe(10)
    expect(linkedList.last.value).toBe(10)

    linkedList.addLast(20)
    expect(linkedList.first.value).toBe(10)
    expect(linkedList.last.value).toBe(20)

    linkedList.removeFirst()
    expect(linkedList.first.value).toBe(20)

    linkedList.removeLast()
    expect(linkedList.last).toBe(null)
    expect(linkedList.first).toBe(null)

    linkedList.addFirst(30)
    linkedList.addFirst(40)
    linkedList.addFirst(50)

    expect(linkedList.size).toBe(3)
    expect(linkedList.contains(40)).toBe(true)
    expect(linkedList.contains(44)).toBe(false)
    expect(linkedList.indexOf(30)).toBe(2)
    expect(linkedList.indexOf(44)).toBe(-1)

    expect(linkedList.toArray()).toBe('50->40->30')
  })
})

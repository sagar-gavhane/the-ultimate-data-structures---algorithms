import Stack from './Stack'

describe('Stack', () => {
  it('should validate Stack operations', () => {
    const stack = new Stack()

    stack.push(10)
    stack.push(20)
    stack.push(30)
    expect(stack.storage).toEqual([10, 20, 30])

    expect(stack.pop()).toEqual(30)
    expect(stack.storage).toEqual([10, 20])

    expect(stack.peek()).toEqual(20)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.toString()).toBe('10,20')

    expect(stack.size()).toBe(2)
  })
})

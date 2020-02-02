import Stack from './Stack/Stack'

const BalanceExpression = (exp) => {
  const stack = new Stack()
  const leftBrackets = ['(', '{', '[', '<']
  const rightBrackets = [')', '}', ']', '>']

  for (const char in exp) {
    if (leftBrackets.includes(exp[char])) {
      stack.push(exp[char])
    }

    if (rightBrackets.includes(exp[char])) {
      if (stack.isEmpty()) {
        return false
      }

      let top = stack.pop()
      if (leftBrackets.indexOf(top) !== rightBrackets.indexOf(exp[char])) {
        return false
      }
    }
  }

  return stack.isEmpty()
}

export default BalanceExpression

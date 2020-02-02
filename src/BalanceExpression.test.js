import BalanceExpression from './BalanceExpression'

describe('BalanceExpression', () => {
  it('should validate BalanceExpression result', () => {
    // valid
    expect(BalanceExpression('a+b')).toBe(true)
    expect(BalanceExpression('(a+b)')).toBe(true)
    expect(BalanceExpression('[a+b]')).toBe(true)
    expect(BalanceExpression('{a+b}')).toBe(true)
    expect(BalanceExpression('(a+(b))')).toBe(true)
    expect(BalanceExpression('[a+[b]]')).toBe(true)
    expect(BalanceExpression('<a+{b}>')).toBe(true)
    expect(BalanceExpression('<{a}+{[b]}>')).toBe(true)
    expect(BalanceExpression('((a+b)(c+d))')).toBe(true)
    expect(BalanceExpression('[2][2]{2}(4)')).toBe(true)
    expect(BalanceExpression('(a+b)c')).toBe(true)
    expect(BalanceExpression('a³-3ab(a-b)-b³')).toBe(true)
    expect(BalanceExpression('(a + b)(a2 – ab + b2)')).toBe(true)
    expect(BalanceExpression('(a – b)(a4 + a3b + a2b2 + ab3 + b4)')).toBe(true)

    // invalid
    expect(BalanceExpression('a+b)')).toBe(false)
    expect(BalanceExpression('[a+b)')).toBe(false)
    expect(BalanceExpression('<a+b)>')).toBe(false)
    expect(BalanceExpression('a+[b}')).toBe(false)
    expect(BalanceExpression('(a+b)[}')).toBe(false)
    expect(BalanceExpression('[{(a+b)[}]}')).toBe(false)
  })
})

export function fibs(n) {
  let result = [0, 1]
  if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  }
  for (let i = 2; i < n; i++) {
    result.push((result[(i - 2)] + result[(i - 1)]))
  }
  return result
}

export function fibsRec(n) {
  function fibonacci(n) {
    if (n <= 1) {
      return n
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2)
    }
  }
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(fibonacci(i))
  }
  return result
}

console.log('result: ' + fibsRec(5))
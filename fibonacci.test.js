import { fibs, fibsRec } from "./fibonacci.js"

test('n = 1', () => {
  expect(fibs(1)).toEqual([0])
})

test('n = 2', () => {
  expect(fibs(2)).toEqual([0, 1])
})

test('n = 5', () => {
  expect(fibs(5)).toEqual([0, 1, 1, 2, 3])
})

test('n = 10', () => {
  expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})

test('n = 1 (recursive)', () => {
  expect(fibsRec(1)).toEqual([0])
})

test('n = 2 (recursive)', () => {
  expect(fibsRec(2)).toEqual([0, 1])
})

test('n = 5 (recursive)', () => {
  expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3])
})

test('n = 10 (recursive)', () => {
  expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})
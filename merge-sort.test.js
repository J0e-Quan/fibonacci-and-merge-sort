import { mergeSort } from "./merge-sort";

test('[] = []', () => {
  expect(mergeSort([])).toBe([])
})

test('[1, 2, 3, 4] = [1, 2, 3, 4]', () => {
  expect(mergeSort([1, 2, 3, 4])).toBe([1, 2, 3, 4])
})

test('[2, 4, 3, 1] = [1, 2, 3, 4]', () => {
  expect(mergeSort([2, 4, 3, 1])).toBe([1, 2, 3, 4])
})

test('[0, 3, 4, 6, 1, 2, 5, 7] = [0, 1, 2, 3, 4, 5, 6, 7]', () => {
  expect(mergeSort([0, 3, 4, 6, 1, 2, 5, 7])).toBe([0, 1, 2, 3, 4, 5 ,6 ,7])
})
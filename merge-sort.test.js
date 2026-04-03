import { mergeSort } from "./merge-sort";

test('[] = []', () => {
  expect(mergeSort([])).toEqual([])
})

test('[1, 2, 3, 4] = [1, 2, 3, 4]', () => {
  expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('[2, 4, 3, 1] = [1, 2, 3, 4]', () => {
  expect(mergeSort([2, 4, 3, 1])).toEqual([1, 2, 3, 4])
})

test('[0, 3, 4, 6, 1, 2, 5, 7] = [0, 1, 2, 3, 4, 5, 6, 7]', () => {
  expect(mergeSort([0, 3, 4, 6, 1, 2, 5, 7])).toEqual([0, 1, 2, 3, 4, 5 ,6 ,7])
})
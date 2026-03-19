#!/usr/bin/env -S npx tsx

const size = 10
const testData = Array.from(
  { length: size },
  () => (
    Math.floor(
      Math.random() * size
    )
  ),
) as number[]

function mergeSort(input: number[]): number[] {
  // if the input length is 2 we are done
  // splitting the array
  if (input.length < 2) {
    return input
  }
  const half = Math.floor(input.length / 2)
  const left = mergeSort(input.slice(0, half))
  const right = mergeSort(input.slice(half))
  return merge(left, right)
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  // add the left over items from either array
  while (leftIndex < left.length) {
    result.push(left[leftIndex])
    leftIndex++
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex])
    rightIndex++
  }
  return result
}

const result = mergeSort(testData)
console.log("Before Merge Sort:", testData)
console.log("After:", result)


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

function bubbleSort(input: number[]): number[] {
  let swaping = true
  let end = input.length
  while (swaping) {
    swaping = false
    for (let i = 1; i < end; i++) {
      const a = input[i - 1]
      const b = input[i]
      if (a > b) {
        input[i - 1] = b
        input[i] = a
      }
    }
    end--
  }
  return input
}

const result = bubbleSort(testData)
console.log("Before Bubble Sort:", testData)
console.log("After:", result)


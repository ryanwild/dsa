package main

import "fmt"

// mutates the slice
func reverseInts(nums []int) []int {
	l, r := 0, len(nums)-1
	for l < r {
		nums[l], nums[r] = nums[r], nums[l]
		l++
		r--
	}
	return nums
}

func main() {
	inputOdd := []int{1, 2, 3}
	fmt.Println([]int{1, 2, 3}, reverseInts(inputOdd))

	inputEven := []int{1, 2, 3, 4}
	fmt.Println([]int{1, 2, 3, 4}, reverseInts(inputEven))
}

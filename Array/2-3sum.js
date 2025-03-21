// 🔹 Best Approach – Two Pointers (O(n²) Time Complexity)
// Sort the array to make it easier to skip duplicates and use the two-pointer technique.
// Fix one element (nums[i]) and use two pointers (left and right) to find the other two numbers.
// Move the pointers based on the sum condition.
// Skip duplicates to avoid repeated triplets.
function threeSum(nums,target){
    nums.sort((a,b)=> a-b  ) // step1
    console.log(nums)
    let result = []
    for (let i = 0; i < nums.length-2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let left = i+1 
        let right = nums.length -1 
        while (left < right) {
            let sum = nums[i]+nums[left] +nums[right]
            if(sum === target){
                result.push([nums[i],nums[left] ,nums[right]])
                while(left < right && nums[left] === nums[left+1]) left++
                while(left < right && nums[right] === nums[right-1]) right--
                left++
                right--
            }
            else if(sum < target){
                left++
            }
            else{
                right--
            }            
        }        
    }
    return result
}
console.log(threeSum([-1, 0, 1, 2, -1, -4], 2)); 

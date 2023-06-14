/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
/*  Reducer function takes two parameters 
- an accumulator 
- a current value 
-> returns a new accumulator value
val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]),.....
it applies as intial value and  1st elemt of array & then initial value and 2nd elmt of array & so on
*/
var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }
    let value = init;
    for(let i=0;i<nums.length;++i){
        if(i === 0) value = fn(init,nums[i]);//at 0th index apply func with init
        else value = fn(value,nums[i]);
    }
    return value;
};
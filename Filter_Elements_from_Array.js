/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
//  it asks us ti return just the truthy value means to remove falsy value
/*
falsy values in jS
    false
	0
	-0
	0n (BigInt zero)
	'' (empty string)
	null
	undefined
	NaN
all other are truthy 
examples are 
    '0' (string containing a single zero)
	'false' (string containing the word "false")
	[] (empty array)
	{} (empty object)
	function() {} (empty function)
 */
    var filter = function(arr, fn) {
        const array = [];
        for(let i=0;i<arr.length;++i){
            // if filtering func return trythy value add element to array
            if(fn(arr[i],i)){
                array.push(arr[i]);
            }
        }
        return array;
    };
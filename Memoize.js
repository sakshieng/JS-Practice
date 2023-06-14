/**
 * @param {Function} fn

 */
function memoize(fn) {
    const cacheObject = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in cacheObject){
            return cacheObject[key];
        }else{
            const result = fn(...args);
            cacheObject[key] = result;
            return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 

 use cacheObject to store cached result
 when memoized func is called with set of arguments those are converted to JSON string and used as key to look up cached result
 otherwise original func is called with arguments and result is stored in cacheObject & returned
 */
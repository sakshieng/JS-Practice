/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(functions.length === 0){
        return function(x){
            return x;
        }
    }else{
	return function(x) {
        var result = functions[functions.length-1](x); 
        // satrt from rightmost func
        for(let i=functions.length-2;i>=0;--i){
            result = functions[i](result);
        }
        return result;
    };
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 func composition means 
 new func of [f(x), g(x), h(x)] would be f(g(h(x)))
 for empty func it would be f(x) = x
 for this we need to apply each func to its result from previous func from right to left
 */
var createCounter = function(init) {
    let Count = init;
  
    function increment() {
      return ++Count;
    }
  
    function decrement() {
        return --Count;
    }
  
    function reset() {
        return (Count = init);
    }
  
    return { increment, decrement, reset };
  };
var createCounter = function(init) {
    let x = init;
    return {
        increment(){
            return ++init;
        },
        decrement(){
            return --init;
        },
        reset(){
            init = x;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

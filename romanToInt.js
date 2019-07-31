var romanToInt = function(s) {
    let cache = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
      total: 0
    }
    return (function(string){
        let curr, prev;
        for (let i = s.length-1; i >= 0; i--){
            let curr = s[i]
            if (cache[curr] < cache[prev]){
                cache['total'] -= cache[curr]
            }
            else{
                cache['total'] += cache[curr]   
            }
            prev = curr
        }
        return cache.total
    })(s)
};

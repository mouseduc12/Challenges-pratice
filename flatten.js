function flatten(arr) {
    var output = arr.reduce((acc, currentValue) =>{
      return acc.concat(currentValue); 
    }, [])
    return output;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];

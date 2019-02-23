function combined(arr){
  let count = [1]
    for(let i = 0; i < arr.length; i++){
      if(arr[i+2]){
        if(count.join("").length < arr.slice().splice(i, i+3).join("").length)
        count = arr.slice().splice(i, 3)
      }
    }
    return count
}

combined(["this", "is", "an", "a1232", "asdasd", "ashdkajshdkasjd"])

function fib(n){
  const array = [0 ,1]
  for(let i = 2; i <= n; i++){
    array.push(array[i - 2] + array[i - 1])
  }
  return array.pop()
}

fib(21)

function firstArg() {
	const newArr =  Object.entries(arguments)
  return newArr[0][1]
}

firstArg('hello', 'hi')

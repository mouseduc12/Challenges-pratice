const newObject = {
  date: 'today'
}

function sayHello(text, text2) {
  return text + ' '+ text2 + ' ' + this.date
}

sayHello.call(newObject, 'hello')
sayHello.apply(newObject, ['hello world', 'yuhuu'])

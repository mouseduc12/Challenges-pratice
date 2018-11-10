function matchSwitch(str){
  var addCount = str.replace(/the/g, "and").match(/and/g)
  return addCount
}
matchSwitch("bird the cow the fox");

function capitalizeNames(arr){
  var output = arr.map((item) => {
    return item[0].toUpperCase() + item.slice(1).toLowerCase()
})
  return output;
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function repeateOnly(str){
    const splitStr = str.split(' ');
    const repeateWords = [];
    for(let i = 0; i < splitStr.length; i++){
      for(let y = i + 1; y < splitStr.length; y++){
          if(splitStr[i] === splitStr[y]){
            repeateWords.push(splitStr[i]);
          }
      }
    }
    console.log(repeateWords);
    const output = repeateWords.filter((each, index, arr) =>{
      return index === arr.indexOf(each);
    })
    console.log(output);
}

repeateOnly("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.")

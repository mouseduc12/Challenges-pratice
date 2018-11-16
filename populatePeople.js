function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName: firstName,
            lastName: lastName
        }
  })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
[
 {firstName: "Frank", lastName: "Peterson"},
 {firstName: "Suzy", lastName: "Degual"},
 {firstName: "Liza", lastName: "Jones"},
]

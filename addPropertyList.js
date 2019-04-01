 reduceList() {
      let listArr = []
      this.newServices.forEach((each) => {
        for (let key in each) {
          if (key.includes('bullet_point')) {
            listArr.push(each[key])
          }
        }
        each['allList'] = listArr.filter((each) => each !== null)
        listArr = []
      })
      return this.newServices
    },

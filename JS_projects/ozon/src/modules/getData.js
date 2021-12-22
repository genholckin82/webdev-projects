const getData = (str) => {

 return fetch(
     `https://test-e6a81-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
     .then((response) => {
             return response.json()
         })
        //  .then((data) => {
        //      console.log(data);
        //  })

     
          

}

export default getData;
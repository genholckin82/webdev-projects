import getData from   "./getData";
//import postData from  "./postData";
import renderGoods from  "./renderGoods";

const load = () => {
    //const cartBtn = document.getElementById('cart');
    
      // cartBtn.addEventListener('click', () => {
            //     postData().then((data) => {
            //         console.log(data);

            //         getData().then((data) => {
            //             console.log(data);

            //              })
               
            //     })
                
            // })
  

    getData().then((data) => {
         renderGoods(data)
          })
}

export default load;
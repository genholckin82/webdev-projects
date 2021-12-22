export const searchFilter = (goods,value) => {
    //console.log(goods)
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())

    })
}


export const categoryFilter = (goods, value) => {
    //console.log(goods)
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;

    })
}


export const priceFilter = (goods, min, max) => {
    //console.log(goods)
    return goods.filter((goodsItem) => {
       if(min === '' && max === '') {
           return goodsItem
       } else if(min !== '' && max !== '') {
           return goodsItem.price > +min && goodsItem.price < +max

       } else if(min !== '' && max  === '') {
              return goodsItem.price > +min
       } else if(min === '' && max !== '') {
              return goodsItem.price < +max
       }

    })
}

export const hotSaleFilter = (goods, value) => {
    //console.log(goods)
    return goods.filter((goodsItem) => {
        if(value) {
            return goodsItem.sale === true

        } else {
            return goodsItem
        }

    })
}

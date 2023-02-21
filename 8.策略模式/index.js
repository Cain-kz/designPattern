/**
 * 策略模式: 定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。
 * */

const priiceProcessor = {
    pre(originPrice){
        if(originPrice >= 100){
            return originPrice - 20
        }
        return originPrice * 0.9
    },
    onSale(originPrice){
        if(originPrice >= 100){
            return originPrice - 30
        }
        return originPrice * 0.8
    },
    back(originPrice){
        if(originPrice >= 200){
            return originPrice - 50
        }
        return originPrice
    },
    fresh(originPrice){
        return originPrice * 0.5
    }
}
function askPrice(tag, originPrice){
    return priiceProcessor[tag](originPrice)
}

priiceProcessor.newUser = function(originPrice){
    if(originPrice >=100 ) {
        return originPrice - 50
    }
    return originPrice
}
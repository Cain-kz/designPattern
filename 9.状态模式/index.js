// 实现一台咖啡机，根据用户选择实现对用制作
// - 美式咖啡态（american)：只吐黑咖啡
// - 普通拿铁态(latte)：黑咖啡加点奶
// - 香草拿铁态（vanillaLatte）：黑咖啡加点奶再加香草糖浆
// - 摩卡咖啡态(mocha)：黑咖啡加点奶再加点巧克力
class CoffeeMaker{
    constructor(){
        this.state = 'init'
        this.leftMick = '500ml'
        this.list = {
            'american': () => console.log('我只吐黑咖啡'),
            'latte': ()=> console.log('黑咖啡加点奶'),
            'vanillaLatte': () => console.log('黑咖啡加点奶再加香草糖浆'),
            'mocha': () => console.log('黑咖啡加点奶再加点巧克力')
        }
    }
    changeState(state){
        this.state = state
        this.list[state]()
    }
   
}
const user1 = new CoffeeMaker()
user1.changeState('american')
user1.list['a'] = ()=>{console.log('aaa')}
user1.changeState('a')
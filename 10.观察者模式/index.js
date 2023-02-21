/**
 * 观察者模式又称（发布-订阅者）
 * 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新
 * */ 

// 定义发布者类
class Publisher {
    constructor(){
        this.observers = []
        console.log('Publisher created');
    }
    //增加订阅者
    add(observer){
        this.observers.push(observer)
    }
    //溢出订阅者
    remove(observer){
        this.observers.forEach((item,i) => {
            if(item === observer){
                this.observers.splice(i, 1)
            }
        })
    }
    //通知所有订阅者
    notify() {
        this.observers.forEach((observer) => {
            observer.update(this)
        })
    }
}


//定义订阅者类
class Observer{
    constructor(){
        console.log('Observer created')
    }
    update() {
        console.log('Observer.update invoked')
    }
}

//定义具体的需求文档（prd）发布类
class PrdPublisher extends Publisher{
    constructor() {
        super()
        this.prdState = null
        this.observers = []
        console.log('prdPublisher created')
    }
    //获取当前的prdState
    getState(){
        return this.prdState
    }
    //该方法用于改变prdState的值
    setState(state){
        this.prdState = state
        this.notify()
    }
}

class DeveloperObserver extends Observer{
    constructor(){
        super()
        this.prdState = {}
    }
    update(publisher){
        this.prdState = publisher.getState()
        this.work()
    }
    work() {
        const prd = this.prdState
    }
}



const lilei = new DeveloperObserver()
const A = new DeveloperObserver()
const B = new DeveloperObserver()

const hanMeiMei = new PrdPublisher()
const prd = {}

hanMeiMei.add(lilei)
hanMeiMei.add(A)
hanMeiMei.add(B)

hanMeiMei.setState(prd)
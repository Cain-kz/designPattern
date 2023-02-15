class MobilePhoneFactory{
    // 提供软件的接口
    createOS(): void {
        throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
    }
    // 提供硬件的接口
     createHardWare(): void{
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
    }
}

class FactStarFactory extends MobilePhoneFactory{
    createOS() { // 安卓实例
        return new AndroidOS()
    }
    createHardWare() { // 高通实例
        return new QualcommHardWare()
    }
}

// 定义操作系统这类产品的抽象产品类
class OS {
    controlHardWare(){
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
    }
}
class AndroidOS extends OS{
    controlHardWare() {
        console.log('我会用安卓的方式去操作硬件')
    }
}
class IosOS extends OS{
    controlHardWare(): void {
        console.log('我会用🍎的方式去操作硬件')
    }
}

//定义手机硬件这类产品的抽象产品类
class HarWare{
    operateByOrder(){
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
    }
}
class QualcommHardWare extends HarWare{
    operateByOrder(){
        console.log('我会用高通的方式去运转')
    }
}
class MiWare extends HarWare{
    operateByOrder() {
        console.log('我会用小米的方式去运转')
    }
}

const myPhone = new FactStarFactory()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
myOS.controlHardWare()
myHardWare.operateByOrder()


// 过气之后，直接拓展新的
class newStarFactory extends MobilePhoneFactory{
    createOS(): void {
        
    }
    createHardWare(): void {
        
    }
}
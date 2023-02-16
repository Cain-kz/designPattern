//es7中的装饰器
function classDecorator(target) {
    target.hasDecorator = true
    return target
}

@classDecorator
class Button{
    //Button类相关的逻辑
}

//验证装饰器是否生效
console.log('Button 是否被装饰了：', Button.hasDecorator)


// 语法糖去装饰类
function funcDecorator(target, name, descriptor){
    let originalMethod = descriptor.value
    descriptor.value = function(){
        return originalMethod.apply(this, arguments)
    }
    return descriptor
}
class Button2 {
    @funcDecorator
    onClick(){
        console.log('我是Func的原有逻辑')
    }
}
const button = new Button2()
button.onClick()
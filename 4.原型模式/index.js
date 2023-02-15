class Dog{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat() {
        console.log(this.name +'骨头肉真好吃')
    }
}
const dog = new Dog('zhansan', 18)
dog.eat()

/**
 * 原型
 * 每个构造函数都有一个prototype属性，它指向构造函数的原型对象，这个原型对象中有一个constructor属性指向构造函数；
 * 每个实例都有一个__proto__属性，当我们使用构造函数去创建实例时，实例__proto__属性就会指向构造函数的原型对象。
 * 补充：es6中的constructor代替es5中的构造函数，本来需要定义在prototype的方法，直接定义在class里
 * */ 
function Cat(name, age) {
    this.name = name
    this.age = age
}
Cat.prototype.eat = function(){
    console.log(this.name + '爱吃小鱼干');
}
const cat = new Cat('多米', 12)


/**
 * 原型链
 * 1.构造函数通过prototype指向原型对象
 * 2.原型对象通过constructor指向构造函数
 * 3.通过构造函数创建实例对象
 * 4.实例对象通过__proto__指向原型对象
 * 5.实例对象调用具体的函数则是通过__proto__从自身到原型对象上查找
*/


/**
 * 深拷贝
*/
function deepClone(obj) {
    // 如果是 值类型 或 null，则直接return
    if(typeof obj !== 'object' || obj === null) return obj
    let copy = {}
    if(obj.constructor === Array) copy = []
    for(let key in obj) {
        // 如果key是对象的自有属性
        if(obj.hasOwnProperty(key)){
            copy[key] = deepClone(obj[key])
        }
    }
    return copy
}
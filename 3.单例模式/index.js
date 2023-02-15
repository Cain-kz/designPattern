/*
 * @Author: cain 826292460@qq.com
 * @Date: 2023-02-15 09:07:34
 * @LastEditors: cain 826292460@qq.com
 * @LastEditTime: 2023-02-15 15:20:09
 * @FilePath: \单例模式\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 常规实现一个实例，每个实例是相互独立的
 * @return {*} 实用单例有：vuex、Redux 
 */
class SingleDog {
  show(){
    console.log('我是一个单例对象');
  }
}
const s1 = new SingleDog()
const s2 = new SingleDog()
console.log(s1 === s2) // flase 

//单例模式想要做到的是，不管我们尝试去创建多少次，它都只给你返回第一次所创建的那唯一的一个实例。
//要做到这一点，就需要构造函数具备判断自己是否已经创建过一个实例的能力。

// 1.把判断逻辑写成静态方法
class SingleDog2 {
  show() {
    console.log('我是一个单例对象')
  }
  static getInstance() {
    // 判断是否已经new过1个实例
    if (!SingleDog2.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      SingleDog2.instance = new SingleDog2()
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return SingleDog2.instance
  }
}

const s3 = SingleDog2.getInstance()
const s4 = SingleDog2.getInstance()
console.log(s3 === s4) //true


// 2.采用闭包来实现
SingleDog.getInstance = (function() {
  let instance = null
  return function() {
    if(!instance) instance = new SingleDog()
    return instance
  }
})()
const s5 = SingleDog.getInstance()
const s6 = SingleDog.getInstance()

console.log(s5 === s6) //true


// 案例：根据单例模式实现共享数据
let Qerson = (function() {
  let instance = null
  class Person {}
  return function(){
    if(!instance) {
      instance = new Person()
    }
    return instance
  }
})()

let person1 = new Qerson()
let person2 = new Qerson()
console.log(person1 === person2) //true
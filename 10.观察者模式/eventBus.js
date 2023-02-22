/*
 * @Author: cain 826292460@qq.com
 * @Date: 2023-02-22 10:44:06
 * @LastEditors: cain 826292460@qq.com
 * @LastEditTime: 2023-02-22 12:17:53
 * @FilePath: \设计模式\10.观察者模式\eventBus.js
 * @Description: 实现一个EventBus
 */

class EventEimtter{
  constructor() {
    //handler是一个mao，用于存储事件与回调之间的对应关系
    this.handlers = {}
  }

  // on 方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
  on(eventName, cb){
    //先检查一下目标事件名有没有对应的监听函数队列
    if(!this.handlers[eventName]){
      //如果没有,那么首先初始化一个监听函数队列
      this.handlers[eventName] = []
    }
    // 把回调函数推入目标事件的函数队列里去
    this.handlers[eventName].push(cb)
  }

  // emit方法用于触发目标事件，它接受事件名和监听函数入参作为参数
  emit(eventName,...args) {
    // 检查目标事件是否有监听函数队列
    if(this.handlers[eventName]){
      // 这里需要对 this.handlers[eventName] 做一次浅拷贝，主要目的是为了避免通过 once 安装的监听器在移除的过程中出现顺序问题
      const handlers = this.handlers[eventName].slice()
      // 如果有，则逐个调用列里的回调函数
      handlers.forEach((callback) => {
        callback(...args)
      })
    }
  }

  // 移除某个事件回调队列里的指定回调函数
  off(eventName, cb){
    const callbacks = this.handlers[eventName]
    const index = callbacks.indexOf(cb)
    if(index !== -1) callbacks.splice(index,1) 
  }

  // 为事件注册单个监听器
  once(eventName,cb){
    // 对回调函数进行包装，使其执行完毕自动被移除
    const wrapper = (...args) => {
      cb(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}

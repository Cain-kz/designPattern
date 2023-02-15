/*
 * @Author: cain 826292460@qq.com
 * @Date: 2023-02-15 15:23:55
 * @LastEditors: cain 826292460@qq.com
 * @LastEditTime: 2023-02-15 15:56:48
 * @FilePath: \单例模式\index2.js
 * @Description: 实现一个Storage，使得改对象单例，基于localStorage进行封装。实现方法setItem(key,value)和getItem(key)
 */

// 1.静态方法版
class Storage {
  static getInstance() {
    if (!Storage.instance) Storage.instance = new Storage()
    return Storage.instance
  }
  getItem (key) {
    return localStorage.getItem(key)
  }
  setItem (key, value) {
    return localStorage.setItem(key, value)
  }
}
const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()
storage1.setItem('name', 'zhansan')
storage1.getItem('name')
storage2.getItem('name')
console.log(storage1 === storage2) // true



//2.闭包
function StorageBase() {}
StorageBase.prototype.getItem = function(key) {
  return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function(key, value) {
  return localStorage.setItem(key, value)
}
const Storage2 = (function() {
  let instance = null
  return function() {
    if(!instance) instance = new StorageBase()
    return instance
  }
})()
const storage3 = Storage2()
const storage4 = Storage2()
storage3.setItem('name', 'zhansan')
storage3.getItem('name')
storage4.getItem('name')
console.log(storage3 === storage4) // true


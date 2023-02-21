/**
 * 缓存代理： 用于一些计算量比较大的场景。
 * */ 
//addAll方法会对传入的所有参数做求和操作
const addAll = function() {
  let result = 0
  const len = arguments.length
  for(let i=0;i<len;i++){
    result+=arguments[i]
  }
  return result
}

// 为求和方法创建代理
const proxyAddAll = (function(){
  // 求和结果的缓存池
  const resultCache = {}
  return function() {
    const args = Array.prototype.join.call(arguments, ',')
    if(args in resultCache) {
      return resultCache[args]
    }
    return resultCache[args] = addAll(...arguments)
  }
})()
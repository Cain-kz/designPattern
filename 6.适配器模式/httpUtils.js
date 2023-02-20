// 适配器模式：把一个类的接口变换成客户端所期待的另一种接口，可以帮助我们解决不兼容的问题。
// axios核心代码也是采用适配器模式

// 业务场景：封装基于fetch的http方法库
/**
 * static静态修饰：
 * 特点：
 * 随着类的加载而加载
 * 优先于对象存在
 * 可以被所有对象共享
 * 可以直接被类名调用，不必创建对象
 * 注意：
 * 静态方法只能访问静态成员。
 * 静态方法中不能写this,super关键字。
 * mian主函数是静态的。
 */

export default class HttpUtils {
  // get方法
  static get(url) {
    return new Promise((reslove, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(result => reslove(result))
      .catch(error => reject(error))
    })
  }
  // post方法
  static post(url, data){
    return new Promsie((reslove, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 将boject类型的数据格式化为合法body参数
        body: this.changeData(data)
      })
      .then(response => response.json())
      .then(result => reslove(result))
      .catch(error => reject(error))
    })
  }
  // body请求体格式化
  static changeData(obj){
    var prop, str = ''
    var i = 0
    for (prop in obj) {
      if(!prop) return
      if(i==0){str += prop + '=' +obj[prop]}
      else{str += '&'+prop+'='+obj[prop]}
      i++
    }
    return str
  }
  static test(){
    console.log(1)
  }
  test2(){
    console.log(2)
  }
}

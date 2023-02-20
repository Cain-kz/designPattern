import HttpUtils from "./httpUtils"
const URL = 'xxx'
const params = {

}

// 原场景：公司旧项目采用ajax封装请求，而现在采用fetch请求方式，这里可以采用适配器原理

async function AjaxAdpter(type, url, data, success, failed) {
  const type = type.toUpperCase()
  let result
  try{
    if(type === 'GET') {
      result = await HttpUtils.get(url) || {}
    } else if(type === 'POST') {
      result = await HttpUtils.post(url,data) || {}
    }
    result.ststusCode === 1 && success ? success(result) : failed(result.statusCode)
  }catch(error){
    if(failed) failed(error.statusCode)
  }
}

// 用适配器适配旧的ajax方法
async function Ajax(type, url, data, success, failed) {
  await AjaxAdpter(type, url, data, success, failed)
}


// 建议去读axios源码
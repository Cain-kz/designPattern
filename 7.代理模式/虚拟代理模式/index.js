/**
 * 除了图片懒加载，还有图片预加载。
 * 预加载主要是避免网络不好，或者图片太大时，页面长时间导致留白
 * */ 
class PreLoadImage {
  static LOADING_URL = 'xxx' //占位图的url地址
  constructor(imgNode) {
    //获取该实例对应的dom节点
    this.imgNode = imgNode
  }
  // 该方法用于设置真实的图片地址
  setSrc(targeUrl) {
    //img节点初始化展示的是一个占位图
    this.imgNode.src = PreLoadImage.LOADING_URL
    //创建一个帮我们加载图片的image实例
    const image = new Image()
    //监听目录图片加载的情况，完成时再将dom上的img节点的src属性设置为目标图片的url
    image.onload = () => {
      this.imgNode.src = targeUrl
    }
    image.src = targeUrl
  }
}


// 这个 PreLoadImage 乍一看没问题，但其实违反了我们设计原则中的单一职责原则。
class PreLoadImage{
  constructor(imgNode) {
    this.imgNode = imgNode
  }
  setSrc(imgUrl){
    this.imgNode.src=imgUrl
  }
}
class ProxyImage{
  static LOADING_URL = 'xxx' //占位图的url地址
  constructor(targeImage) {
    this.targeImage = targeImage
  }
  setSrc(targetUrl) {
     // 真实img节点初始化时展示的是一个占位图
    this.targeImage.setSrc(ProxyImage.LOADING_URL)
     // 创建一个帮我们加载图片的虚拟Image实例
    const virtualImage = new Image()
     // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
    virtualImage.onload = () => {
      this.targeImage.setSrc(targetUrl)
    }
    virtualImage.src=targetUrl // 设置src属性，虚拟Image实例开始加载图片
  }
}

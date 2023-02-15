/**
 * 装饰器模式（装饰者模式）：在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以进行满足用户对更复杂需求。
 * */ 
// 按钮文案修改逻辑
function changeButtonText() {
    const btn = document.getElementById('open')
    btn.innerText = '快去登录'
}
// 按钮置灰逻辑
function disableButton() {
    const btn = document.getElementById('open')
    btn.setAttribute('disabled', true)
}

// 新版本功能逻辑整理
function changeButtonStatus() {
    changeButtonText()
    disableButton()
}

// es6
class OpenButton{
    onclick() {
        const modal = new modal()
        modal.style.display = 'block'
    }
}
// 定义按钮对应的装饰器
class Decorator{
    constructor(open_button){
        this.open_button = open_button
    }
    onclick() {
        this.open_button.onclick()
        //包装了一层新逻辑
        this.changeButtonStatus()
    }
    changeButtonStatus() {
        this.changeButtonText()
        this.disableButton()
    }
    disableButton() {
        const btn = document.getElementById('open')
        btn.setAttribute('disabled', true)
    }
    changeButtonText() {
        const btn = document.getElementById('open')
        btn.innerText = '快去登录'
    }
}
const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById('open').addEventListener('click',function(){
    decorator.onclick()
})
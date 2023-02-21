// 代理模式：在某些情况下，处于种种考虑/限制，一个对象不能直接访问另一个对象，需要一个第三者（代理）牵线搭桥从而间接达到访问目的

// 前置：es6中的Proxy
// const proxy = new Proxy(obj,{})

// 1. 事件代理：事件冒泡
// 2. 虚拟代理：通过Image加载图片
// 3. 缓存代理：缓存计算结果
// 4. 保护代理：getter，setter保护核心数据

const present = {
    type: '巧克力',
    value: 60
}

const girl = {
    name: '小美',// 姓名
    aboutMe: '...',// 自我介绍
    age: 24,// 年龄
    career: 'teacher',// 职业
    fakeAvatar: 'xxxx',// 假头像
    avatar: 'xxxx'(自己的照片地址),// 真实头像
    phone: 123456,// 手机号
    presents: [], //礼物数组
    bottomValue: 50, //拒收50块以下的礼物
    lastPresent: present, //记录最近一次收到的礼物
}

//普通隐私信息
const baseInfo = ['age', 'career']
//隐私信息
const privateInfo = ['avatar', 'phone']

const JuejinLovers = new Proxy(girl, {
    get: function(girl, key) {
        if(baseInfo.indexOf(key) !== -1 && !user.isValidated) {
            alert('您还没完成验证哦')
            return
        }
        if(user.isValidated && privateInfo.indexOf(key) && !user.isVIP) {
            alert('只有VIP才可以查看该信息哦')
            return
        }
    },

    set: function(girl, key, val) {
        if(key.value < girl.bottomValue) {
            alert('sorry, 您的礼物被拒收了')
            return
        }
        girl.lastPresent = val
        girl.presents = [...girl.presents, val]
    }
})


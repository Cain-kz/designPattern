interface careerParam{
    [key: string ]: Array<string>
}
function User(this: any, name: string, age: number, career: string, work:Array<string>):void{
    this.name = name
    this.age = age
    this.career = career
    this.work = work
}
const careerList: careerParam = {
    'coder': ['写代码', '修bug'],
    'product manger': ['订会议','催更'],
    'boss': ['见客户', '喝茶']
}
function Factory(name: string, age: number, career: string):void{
    let work
    work = careerList[career]
    return new (User as any)(name, age, career, work)
}

const test = new (Factory as any)('zhansan', 18, 'coder')
console.log(test)
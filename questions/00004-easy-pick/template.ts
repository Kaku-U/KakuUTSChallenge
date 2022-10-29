type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
//ts
//1. P in K 类型键值遍历
//2. keyof T 返回联合类型 'title' | 'completed' | 'description'
//3. extends 联合类型 'title' | 'completed'
//4. extends keyof 限制只能是 T 的子键值


//js
function MyPickFunc(T: any, K: any) {
    let obj: any = {}
    for (const key in K) {
        if(T[key]) {
            obj[key] = T[key]
        }
    }
    return obj
}
//js
//1. 遍历一个数组
//2. 返回一个对象
//3. 判断是否存在

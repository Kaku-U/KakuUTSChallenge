type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}
//ts
//1.P in keyof T 遍历接口的键值
//2. readonly 限制属性为只读

//js
function MyReadonlyFunc(T: any) {
    let obj: any = {}
    for (const key in T) {
        obj[key + 'readonly'] = T[key]
    }
    return obj
}

//js
//1. 遍历对象的key
//2. 操作对象的key 更改为readonly
//3. 返回一个对象
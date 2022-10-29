type TupleToObject<T extends readonly (number | string | symbol)[]> = {
    [P in T[number]]: P
}
//ts
//1. P in T[number] 遍历一个数组Array对象 的值
//2. (number | string | symbol)[] 限制数组的值的类型必须为 (number | string | symbol)
//3. Object 的键值 必须为 (number | string | symbol)

//js
function TupleToObjectFunc(tuple:readonly any[]) {
    let obj: any = {}
    for (const value of tuple) {
        obj[value] = value
    }
    return obj
}
//js
//1. 遍历数组的值
//2. value -> key
//3. 返回 obj

type MyExclude<T, U> = T extends U ? never : T

type t = 'a' | 'b' | 'c'  extends 'a' ? true : false

type s = MyExclude<'a' | 'b' | 'c', 'a'>

//js
function MyExcludeFunc(t: any, u: any) {
    let obj: any = {} 
    for (const key in u) {
        if(t[key]) {
            obj[key] =  t[key]
        }
    }
    return obj
}

//
// 1. union extends union 会发生什么 
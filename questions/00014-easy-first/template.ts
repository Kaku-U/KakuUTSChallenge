// type First<T extends any[]> = T extends [] ? never : T[0] // solution0
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0] // solution1
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never //solution2
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never// solution3

type f = First<[]>
// T[number]

// 空数组类型
// type ages = []
// union
// type t = ages[number]
// 看看某个值是不是在 Union 里面 typeA extends unionB ? true : false
// type t2 = T[0] extends ages[number] ? "true" : "false"
function MyFirstFunc(t: any) {
  const { first, ...rest } = t
  return first || 'never'
}
// 知识点
// 1. extends 类型条件判断 T 是否为空数组[]
// 2. 获取tuple 的类型长度是否为 0
// 3. extends union (tuple 的值 T[number])
// 4. 使用类型推断 判断是否能推断出数组的第一个元素类型

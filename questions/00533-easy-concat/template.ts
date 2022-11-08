type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

type C = [1]

// js
function ConcatFunc(t: any[], u: any[]) {
  let r: any[] = []
  // t.forEach((element) => {
  //   r.push(element)
  // })
  // u.forEach((element) => {
  //   r.push(element)
  // })
  return [...t, ...u]
}
// 知识点
// 1. ...t 解构类型
// 2.https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types

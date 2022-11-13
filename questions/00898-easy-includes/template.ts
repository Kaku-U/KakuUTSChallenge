import type { Equal } from '@type-challenges/utils'
export type Includes<T extends readonly unknown[], U> = T extends [infer F, ...infer R] ? Equal<F, U> extends true ? true : Includes<R, U> : false

type as = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>
// js
function IncludesFunc(t: readonly any[], u: any) {
  // return t.includes(u)
  // for (let i = 0; i < t.length; i++) {
  //   const element = t[i]
  //   if (element === u)
  //     return true
  // }
  // return false
  function _in(t: readonly any[], u: any): any {
    const [first, ...rest] = t
    if (first === u)
      return true
    else
      return _in(rest, u)
  }
  return _in(t, u)
}

// 知识点
// 1. readonly unknown[] 不可修改的数组
// 2. keyof [] '1' | '2' | '3' 联合类型
// 3. 利用递归实现遍历数据
// 4. ts import/export

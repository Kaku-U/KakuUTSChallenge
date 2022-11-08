type If<C extends boolean, T, F> = C extends true ? T : F

// js
function IfFunc(c: boolean, t: any, f: any) {
  if (typeof c === 'boolean')
    return c ? t : f
  else
    return null
}
// 知识点
// 1. C extends boolean 限制条件类型必须为bool类型
// 2. C extends true 条件判断是否为T 类型 还是为 F 类型

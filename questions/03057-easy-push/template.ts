type Push<T extends unknown[], U> = [...T, U]

// js
function PushFunc(t: unknown[], u: any) {
  return [...t, u]
}

// 知识点
// 1. ...T 数组解构

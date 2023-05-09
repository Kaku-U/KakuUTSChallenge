// answer
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends K ? P: never]: T[P] 
} & {
  [P in keyof T as P extends K ? never: P]: T[P] 
}

// answer 2
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P]
// } & {
//   [P in keyof T as P extends K ? never: P]: T[P] 
// }

// K extends keyof T = keyof T 
// 1.因为第二个泛型可能为空，所以需要通过 = 来赋默认值

// readonly [P in keyof T as P extends K ? P: never]: T[P] 
// 2.筛选出T中符合的P为 readonly

// &
// 使用交叉类型合并属性

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X > 
    ? X extends Promise<unknown> 
        ? MyAwaited<X> 
        : X
    : T


// 知识点
// 1. infer 只能在条件类型里使用
// 2. 使用未知数 unknown < any
// 3. 递归调用泛型
type Length<T extends readonly any[]> = T['length']


// 知识点
// 1.接受一个readonly 的数组
// 2.T['length'] 返回类型里 'length' 属性的类型
// 3. extends any[] 继承数组
// 4.tuple 类型不同于普通的数组 因为是readonly 所以 tuple 的length 是一个固定的数字 而不是number 类型
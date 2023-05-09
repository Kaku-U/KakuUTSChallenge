type MyReturnType<T extends Function> = 
  T extends () => infer R
  ? R
  : never
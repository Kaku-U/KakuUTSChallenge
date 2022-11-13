type Unshift<T extends unknown[], U> = [U, ...T]

// js
function UnshiftFunc(T: unknown[], U: any) {
  return [U, ...T]
}

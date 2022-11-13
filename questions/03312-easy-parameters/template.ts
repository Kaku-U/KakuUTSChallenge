type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

const baz = (): void => {}
type bzat = MyParameters<typeof baz>

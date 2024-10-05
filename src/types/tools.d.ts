// Enumerate类型是一个递归类型，它用来创建一个长度为 N 的数字数组。它的第一个参数 N 是数字类型，表示数组的长度。它的第二个参数 Acc 是数字数组类型，表示当前递归中数组的值。当 Acc 的长度等于 N 时，这个递归类型会停止递归，并返回 Acc 数组中的每一项。如果 Acc 的长度小于 N，那么递归类型会将当前的长度添加到 Acc 数组中，并继续递归。IntRange 是一个由两个数字类型参数 F 和 T 组成的类型，它表示从 F 到 T 的一个整数范围。它通过使用 Exclude 类型来排除由 Enumerate 类型生成的数组中的所有小于 F 的元素,从而实现F到T。
type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;

// 定义整型数值的范围，左闭右开
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type T = IntRange<4, 400>;

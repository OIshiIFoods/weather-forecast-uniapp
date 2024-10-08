/** 将数字转为中文数字 */
export const toZhDegit = (num: number) => {
    const numbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const units1 = ['', '十', '百', '千']
    const units2 = ['', '万', '亿']

    let originZhNum = [...('' + num)].map(value => numbers[+value])

    let format: (string[] | string)[] = originZhNum.reverse().map((_, idx) => idx % 4 === 0 ? originZhNum.slice(idx, idx + 4).reverse() : [])
        .filter(item => item.length !== 0)
        .reverse()
        .map(
            (item) => {
                let len = item.length
                for (let i = 0; i < len; i++) {
                    item.splice(len - i, 0, units1[i])
                }
                return item
            })

    for (let i = 0, len = format.length; i < len; i++) {
        format.splice(len - i, 0, units2[i])
    }

    // 消除 一十一 这种情况
    format.forEach((item) => {
        if (item?.length === 4 && item[0] === '一') {
            item = item as string[]
            item.splice(0, 1)
        }
    })

    return format.flat(1).join('')
}

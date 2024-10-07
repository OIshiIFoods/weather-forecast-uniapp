export namespace State {
    type PositionInfo = {
        /** 用于定位的IP地址 */
        ip?: string
        /** 位置信息 */
        location: {
            /** 纬度 */
            lat: number
            /** 经度 */
            lng: number
        },
        /** 行政区划信息 */
        ad_info: {
            /** 国家 */
            nation?: string
            /** 国家代码 */
            nation_code?: number
            /** 行政区划代码 */
            adcode: number
            /** 省 */
            province: string
            /** 市 */
            city?: string
            /** 区 */
            district?: string
        }
    }
}
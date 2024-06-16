export type GeoPositionInfo = {
    // 状态码，0为正常，其它为异常
    status: number,
    // 对status的描述
    message: string,
    // IP定位结果
    result: {
        // 用于定位的IP地址
        ip: string,
        location: {
            // 纬度
            lat: number,
            // 经度
            lng: number
        },
        // 定位行政区划信息
        ad_info: {
            // 国家
            nation: string,
            // 国家代码
            nation_code: number,
            // 省
            province: string,
            // 市
            city?: string,
            // 区
            district?: string,
            // 行政区划代码
            adcode: number
        }
    }
}
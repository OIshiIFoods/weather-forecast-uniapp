export type TodayWeatherInfo = {
    // 状态码
    code: string,
    // 当前 API 的最新更新时间
    updateTime: string,
    // 当前数据的响应式页面
    fxLink: string,
    now: {
        // 数据观测时间
        obsTime: string,
        // 温度
        temp: string,
        // 体感温度
        feelsLike: string,
        // 天气状况的图标代码
        icon: string,
        // 天气状况的文字描述
        text: string,
        // 风向360角度
        wind360: string,
        // 风向
        windDir: string,
        // 风力等级
        windScale: string,
        // 风速，公里/小时
        windSpeed: string,
        // 相对湿度，百分比数值
        humidity: string,
        // 当前小时累计降水量，单位：mm
        precip: string,
        // 大气压强，单位：百帕
        pressure: string,
        // 能见度，单位：公里
        vis: string,
        // 云量，百分比数值
        cloud?: string,
        // 露点温度
        dew?: string
    },
    refer: {
        // 原始数据来源，或数据源说明
        sources?: Array<string>,
        // 数据许可或版权声明
        license?: Array<string>
    }
}
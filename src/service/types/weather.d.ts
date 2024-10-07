type BaseInfo = {
    /** 状态码 s */
    code: string,
    /** 当前 API 的最新更新时间 */
    updateTime: string,
    /** 当前数据的响应式页面 */
    fxLink: string,
    refer: {
        /** 原始数据来源，或数据源说明 */
        sources?: Array<string>,
        /** 数据许可或版权声明 */
        license?: Array<string>
    }
}

declare namespace Api {
    namespace Weather {
        /** 获取当前的天气信息 */
        namespace GetCurWeatherInfo {
            type Request = {
                /** 纬度 */
                lat: number
                /** 经度 */
                lng: number
            }
            type Response = BaseInfo & {
                now: {
                    /** 数据观测时间 */
                    obsTime: string,
                    /** 温度 */
                    temp: string,
                    /** 体感温度 */
                    feelsLike: string,
                    /** 天气状况的图标代码 */
                    icon: string,
                    /** 天气状况的文字描述 */
                    text: string,
                    /** 风向360角度 */
                    wind360: string,
                    /** 风向 */
                    windDir: string,
                    /** 风力等级 */
                    windScale: string,
                    /** 风速，公里/小时 */
                    windSpeed: string,
                    /** 相对湿度，百分比数值 */
                    humidity: string,
                    /** 当前小时累计降水量，单位：mm */
                    precip: string,
                    /** 大气压强，单位：百帕 */
                    pressure: string,
                    /** 能见度，单位：公里 */
                    vis: string,
                    /** 云量，百分比数值 */
                    cloud?: string,
                    /** 露点温度 */
                    dew?: string
                }
            }
        }

        /** 获取未来指定天数的天气信息 */
        namespace GetMultDayWeatherInfo {
            type Request = {
                /** 纬度 */
                lat: number
                /** 经度 */
                lng: number
                /** 天数 */
                days: 3 | 7 | 10 | 15 | 30
            }
            type Response = BaseInfo & {
                daily: {
                    /** daily.fxDate 预报日期 */
                    fxDate: string;
                    /** daily.sunrise 日出时间，在高纬度地区可能为空 */
                    sunrise?: string;
                    /** daily.sunset 日落时间，在高纬度地区可能为空 */
                    sunset?: string;
                    /** daily.moonrise 当天月升时间，可能为空 */
                    moonrise?: string;
                    /** daily.moonset 当天月落时间，可能为空 */
                    moonset?: string;
                    /** daily.moonPhase 月相名称 */
                    moonPhase: string;
                    /** daily.moonPhaseIcon 月相图标代码，另请参考天气图标项目 */
                    moonPhaseIcon: string;
                    /** daily.tempMax 预报当天最高温度 */
                    tempMax: string;
                    /** daily.tempMin 预报当天最低温度 */
                    tempMin: string;
                    /** daily.iconDay 预报白天天气状况的图标代码，另请参考天气图标项目 */
                    iconDay: string;
                    /** daily.textDay 预报白天天气状况文字描述，包括阴晴雨雪等天气状态的描述 */
                    textDay: string;
                    /** daily.iconNight 预报夜间天气状况的图标代码，另请参考天气图标项目 */
                    iconNight: string;
                    /** daily.textNight 预报晚间天气状况文字描述，包括阴晴雨雪等天气状态的描述 */
                    textNight: string;
                    /** daily.wind360Day 预报白天风向360角度 */
                    wind360Day: string;
                    /** daily.windDirDay 预报白天风向 */
                    windDirDay: string;
                    /** daily.windScaleDay 预报白天风力等级 */
                    windScaleDay: string;
                    /** daily.windSpeedDay 预报白天风速，公里 / 小时 */
                    windSpeedDay: string;
                    /** daily.wind360Night 预报夜间风向360角度 */
                    wind360Night: string;
                    /** daily.windDirNight 预报夜间当天风向 */
                    windDirNight: string;
                    /** daily.windScaleNight 预报夜间风力等级 */
                    windScaleNight: string;
                    /** daily.windSpeedNight 预报夜间风速，公里 / 小时 */
                    windSpeedNight: string;
                    /** daily.humidity 相对湿度，百分比数值 */
                    humidity: string;
                    /** daily.precip 预报当天总降水量，默认单位：毫米 */
                    precip: string;
                    /** daily.pressure 大气压强，默认单位：百帕 */
                    pressure: string;
                    /** daily.vis 能见度，默认单位：公里 */
                    vis: string;
                    /** daily.cloud 云量，百分比数值。可能为空 */
                    cloud: string;
                    /** daily.uvIndex 紫外线强度指数 */
                    uvIndex: string;
                }[];
            }
        }

        /** 获取未来数小时的天气信息 */
        namespace GetHourlyWeatherInfo {
            type Request = {
                /** 纬度 */
                lat: number
                /** 经度 */
                lng: number
                /** 小时数 */
                hours: 24 | 72 | 168
            }
            type Response = BaseInfo & {
                hourly: {
                    /** 预报时间 */
                    fxTime: string;
                    /** 温度，默认单位：摄氏度 */
                    temp: string;
                    /** 天气状况的图标代码 */
                    icon: string;
                    /** 天气状况的文字描述，包括阴晴雨雪等天气状态的描述 */
                    text: string;
                    /** 风向360角度 */
                    wind360: string;
                    /** 风向 */
                    windDir: string;
                    /** 风力等级 */
                    windScale: string;
                    /** 风速，公里/小时 */
                    windSpeed: string;
                    /** 相对湿度，百分比数值 */
                    humidity: string;
                    /** 当前小时累计降水量，默认单位：毫米 */
                    pop: string;
                    /** 逐小时预报降水概率，百分比数值，可能为空 */
                    precip: string;
                    /** 大气压强，默认单位：百帕 */
                    pressure: string;
                    /** 云量，百分比数值。可能为空 */
                    cloud: string;
                    /**  露点温度。可能为空 */
                    dew: string;
                }[];
            }
        }

        /** 获取指定天数生活指数 */
        namespace GetLifeIndex {
            type Request = {
                /** 纬度 */
                lat: number
                /** 经度 */
                lng: number
                /** 天数 */
                days: 1 | 3
            }
            type Response = BaseInfo & {
                daily: {
                    /** daily.date 预报日期 "2021-12-16" */
                    date: string;
                    /** daily.type 生活指数类型ID "2" */
                    type: string;
                    /** daily.name 生活指数类型的名称 "洗车指数" */
                    name: string;
                    /** daily.level 生活指数预报等级 "3" */
                    level: string;
                    /** daily.category 生活指数预报级别名称 "较不宜" */
                    category: string;
                    /** daily.text 生活指数预报的详细描述，可能为空 */
                    text?: string;
                }[];
            }
        }

        /** 获取当前空气质量 */
        namespace GetCurAirQuality {
            type Request = {
                /** 纬度 */
                lat: number
                /** 经度 */
                lng: number
            }
            type Response = BaseInfo & {
                now: {
                    /** now.pubTime 空气质量数据发布时间 */
                    pubTime: string;
                    /** now.aqi 空气质量指数 */
                    aqi: string;
                    /** now.level 空气质量指数等级 */
                    level: string;
                    /** now.category 空气质量指数级别 */
                    category: string;
                    /** now.primary 空气质量的主要污染物，空气质量为优时，返回值为NA */
                    primary: string;
                    /** now.pm10 PM10 */
                    pm10: string;
                    /** now.pm2p5 PM2.5 */
                    pm2p5: string;
                    /** now.no2 二氧化氮 */
                    no2: string;
                    /** now.so2 二氧化硫 */
                    so2: string;
                    /** now.co 一氧化碳 */
                    co: string;
                    /** now.o3 臭氧 */
                    o3: string;
                };
                station: {
                    /** station.pubTime 空气质量数据发布时间 */
                    pubTime: string;
                    /** station.name 监测站名称 */
                    name: string;
                    /** station.id 监测站ID */
                    id: string;
                    /** 空气质量指数 */
                    aqi: string;
                    /** 空气质量指数等级 */
                    level: string;
                    /** 空气质量指数级别 */
                    category: string;
                    /** 空气质量的主要污染物，空气质量为优时，返回值为NA */
                    primary: string;
                    /** PM10 */
                    pm10: string;
                    /** PM2.5 */
                    pm2p5: string;
                    /** 二氧化氮 */
                    no2: string;
                    /** 二氧化硫 */
                    so2: string;
                    /** 一氧化碳 */
                    co: string;
                    /** 臭氧 */
                    o3: string;
                }[];
            }
        }

        /** 获取未来5天的空气质量 */
        namespace GetMultDayAirQuality {
            type Request = {
                /** 纬度 */
                lat: number
                /** 经度 */
                lng: number
            }
            type Response = BaseInfo & {
                daily: {
                    /** daily.fxDate 预报日期 */
                    fxDate: string;
                    /** daily.aqi 空气质量指数 */
                    aqi: string;
                    /** daily.level 空气质量指数等级 */
                    level: string;
                    /** daily.category 空气质量指数级别 */
                    category: string;
                    /** daily.primary 空气质量的主要污染物，空气质量为优时，返回值为NA */
                    primary: string;
                }[];
            }
        }
    }

}
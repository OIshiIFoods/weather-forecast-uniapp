import { http } from "@/api/http"

const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
const WEATHER_SECRET_KEY = import.meta.env.VITE_WEATHER_SECRET_KEY

/** 获取当前的天气信息 */
export const getCurWeatherInfo = (params: Api.Weather.GetCurWeatherInfo.Request) => {
    return http<Api.Weather.GetCurWeatherInfo.Response>({
        url: WEATHER_BASE_URL + '/weather/now',
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat
        }
    })
}

/** 获取未来指定天数的天气信息 */
export const getMultDayWeatherInfo = (params: Api.Weather.GetMultDayWeatherInfo.Request) => {
    return http<Api.Weather.GetMultDayWeatherInfo.Response>({
        url: WEATHER_BASE_URL + `/weather/${params.days}d`,
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat
        }
    })
}

/** 获取未来数小时的天气信息*/
export const getHourlyWeatherInfo = (params: Api.Weather.GetHourlyWeatherInfo.Request) => {
    return http<Api.Weather.GetHourlyWeatherInfo.Response>({
        url: WEATHER_BASE_URL + `/weather/${params.hours}h`,
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat
        }
    })
}

/** 获取指定天数生活指数 */
export const getLifeIndex = (params: Api.Weather.GetLifeIndex.Request) => {
    return http<Api.Weather.GetLifeIndex.Response>({
        url: WEATHER_BASE_URL + `/indices/${params.days}d`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat,
            type: 0
        }
    })
}

/** 获取当前空气质量 */
export const getCurAirQuality = (params: Api.Weather.GetCurAirQuality.Request) => {
    return http<Api.Weather.GetCurAirQuality.Response>({
        url: WEATHER_BASE_URL + `/air/now`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat,
        }
    })
}

/** 获取未来5天的空气质量 */
export const getMultDayAirQuality = (params: Api.Weather.GetMultDayAirQuality.Request) => {
    return http<Api.Weather.GetMultDayAirQuality.Response>({
        url: WEATHER_BASE_URL + `/air/5d`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat,
        }
    })
}

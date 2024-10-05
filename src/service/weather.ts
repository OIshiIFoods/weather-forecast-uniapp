import { http } from "@/api/http"
import { Api } from "./types/weather"

const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
const WEATHER_SECRET_KEY = import.meta.env.VITE_WEATHER_SECRET_KEY

/** 获取当前的天气信息 */
export const getCurWeatherInfo = (params: Api.GetCurWeatherInfo.Request) => {
    return http<Api.GetCurWeatherInfo.Response>({
        url: WEATHER_BASE_URL + '/weather/now',
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat
        }
    })
}

/** 获取未来指定天数的天气信息 */
export const getMultDayWeatherInfo = (params: Api.GetMultDayWeatherInfo.Request) => {
    return http<Api.GetMultDayWeatherInfo.Response>({
        url: WEATHER_BASE_URL + `/weather/${params.days}d`,
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat
        }
    })
}

/** 获取未来数小时的天气信息*/
export const getHourlyWeatherInfo = (params: Api.GetHourlyWeatherInfo.Request) => {
    return http<Api.GetHourlyWeatherInfo.Response>({
        url: WEATHER_BASE_URL + `/weather/${params.hours}h`,
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat
        }
    })
}

/** 获取指定天数生活指数 */
export const getLifeIndex = (params: Api.GetLifeIndex.Request) => {
    return http<Api.GetLifeIndex.Response>({
        url: WEATHER_BASE_URL + `/indices/${params.days}d`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat,
            type: 0
        }
    })
}

/** 获取当前空气质量 */
export const getCurAirQuality = (params: Api.GetCurAirQuality.Request) => {
    return http<Api.GetCurAirQuality.Response>({
        url: WEATHER_BASE_URL + `/air/now`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat,
        }
    })
}

/** 获取未来5天的空气质量 */
export const getMultDayAirQuality = (params: Api.GetMultDayAirQuality.Request) => {
    return http<Api.GetMultDayAirQuality.Response>({
        url: WEATHER_BASE_URL + `/air/5d`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: params.lng + ',' + params.lat,
        }
    })
}

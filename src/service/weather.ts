import { http } from "@/api/http"
import type { CurAirQuality, CurWeatherInfo, HourlyWeatherInfo, LifeIndex, MultDayAirQuality, MultDayWeatherInfo } from "@/types/weather"

const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
const WEATHER_SECRET_KEY = import.meta.env.VITE_WEATHER_SECRET_KEY

// 获取当前的天气信息
export const getCurWeatherInfo = ({ lat, lng }: { lat: number, lng: number }) => {
    return http<CurWeatherInfo>({
        url: WEATHER_BASE_URL + '/weather/now',
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: lng + ',' + lat
        }
    })
}

// 获取未来指定天数的天气信息
export const getMultDayWeatherInfo = ({ lat, lng, days }: { lat: number, lng: number, days: 3 | 7 | 10 | 15 | 30 }) => {
    return http<MultDayWeatherInfo>({
        url: WEATHER_BASE_URL + `/weather/${days}d`,
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: lng + ',' + lat
        }
    })
}

// 获取未来数小时的天气信息
export const getHourlyWeatherInfo = ({ lat, lng, hours }: { lat: number, lng: number, hours: 24 | 72 | 168 }) => {
    return http<HourlyWeatherInfo>({
        url: WEATHER_BASE_URL + `/weather/${hours}h`,
        method: 'GET',
        data: {
            key: WEATHER_SECRET_KEY,
            location: lng + ',' + lat
        }
    })
}

// 获取指定天数生活指数
export const getLifeIndex = ({ lat, lng, days }: { lat: number, lng: number, days: 1 | 3 }) => {
    return http<LifeIndex>({
        url: WEATHER_BASE_URL + `/indices/${days}d`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: lng + ',' + lat,
            type: 0
        }
    })
}

// 获取当前空气质量
export const getCurAirQuality = ({ lat, lng }: { lat: number, lng: number }) => {
    return http<CurAirQuality>({
        url: WEATHER_BASE_URL + `/air/now`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: lng + ',' + lat,
        }
    })
}

// 获取未来5天的空气质量
export const getMultDayAirQuality = ({ lat, lng }: { lat: number, lng: number }) => {
    return http<MultDayAirQuality>({
        url: WEATHER_BASE_URL + `/air/5d`,
        data: {
            key: WEATHER_SECRET_KEY,
            location: lng + ',' + lat,
        }
    })
}

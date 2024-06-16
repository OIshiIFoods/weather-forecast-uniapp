import { http } from "@/api/http"
import type { TodayWeatherInfo } from "@/types/weather"

const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
const WEATHER_SECRET_KEY = import.meta.env.VITE_WEATHER_SECRET_KEY

export const getTodayWeatherInfo = ({ lat, lng }: { lat: number, lng: number }) => {
    return http<TodayWeatherInfo>({
        url: WEATHER_BASE_URL + '/weather/now',
        data: {
            key: WEATHER_SECRET_KEY,
            location: lng + ',' + lat
        }
    })
}
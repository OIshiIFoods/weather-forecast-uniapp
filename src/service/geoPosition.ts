import { http } from "@/api/http"
import { Api } from "@/service/types/geoPosition"

const GEO_BASE_URL = import.meta.env.VITE_GEO_BASE_URL
const GEO_SECRET_KEY = import.meta.env.VITE_GEO_SECRET_KEY

/** 获取当前位置信息 */
export const getCurPosition = (params: Api.GetCurPosition.Request) => {
    return http<Api.GetCurPosition.Response>({
        url: GEO_BASE_URL + '/ws/location/v1/ip',
        method: 'GET',
        data: {
            key: GEO_SECRET_KEY
        }
    })
}

/** 搜索地点 */
export const searchPosition = (params: Api.SearchPosition.Request) => {
    return http<Api.SearchPosition.Response>({
        url: GEO_BASE_URL + '/ws/place/v1/search',
        method: 'GET',
        data: JSON.parse(JSON.stringify({
            key: GEO_SECRET_KEY,
            boundary: 'region(全国)',
            ...params
        }))
    })
}
import { http } from "@/api/http"
import type { GeoPositionInfo } from "@/types/geo"

const GEO_BASE_URL = import.meta.env.VITE_GEO_BASE_URL
const GEO_SECRET_KEY = import.meta.env.VITE_GEO_SECRET_KEY

export const getCurPosition = () => {
    return http<GeoPositionInfo>({
        url: GEO_BASE_URL + '/ip',
        data: {
            key: GEO_SECRET_KEY
        }
    })
}
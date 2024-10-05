import { http } from "@/api/http"
import type { CurPositionInfo, SearchInfo } from "@/types/geo"

const GEO_BASE_URL = import.meta.env.VITE_GEO_BASE_URL
const GEO_SECRET_KEY = import.meta.env.VITE_GEO_SECRET_KEY

/** 获取当前位置信息 */
export const getCurPosition = () => {
    return http<CurPositionInfo>({
        url: GEO_BASE_URL + '/ws/location/v1/ip',
        method: 'GET',
        data: {
            key: GEO_SECRET_KEY
        }
    })
}

/**
 * @func searchPosition
 * @description搜索地点
 * @param {String} keyword 关键词
 * @param {number} page_size 每页数据数量
 * @param {number} page_index 页码
 * @param {0 | 1} get_subpois 是否返回子地点
 * @return {Promise} 返回值
*/
export const searchPosition = ({ keyword, page_size, page_index, get_subpois }: { keyword: string, page_size?: number, page_index?: number, get_subpois?: 0 | 1 }) => {
    return http<SearchInfo>({
        url: GEO_BASE_URL + '/ws/place/v1/search',
        method: 'GET',
        data: JSON.parse(JSON.stringify({
            key: GEO_SECRET_KEY,
            keyword,
            boundary: 'region(全国)',
            page_size,
            page_index,
            get_subpois
        }))
    })
}
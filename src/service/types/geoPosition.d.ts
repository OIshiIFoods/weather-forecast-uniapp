declare namespace Api {
    namespace GeoPosition {
        /** 获取当前地点 */
        namespace GetCurPosition {
            type Request = undefined
            type Response = {
                /** 状态码，0为正常，其它为异常 */
                status: number
                /** 对status的描述 */
                message: string
                /** IP定位结果 */
                result: {
                    /** 用于定位的IP地址 */
                    ip: string
                    location: {
                        /** 纬度 */
                        lat: number
                        /** 经度 */
                        lng: number
                    }
                    /** 定位行政区划信息 */
                    ad_info: {
                        /** 国家 */
                        nation: string
                        /** 国家代码 */
                        nation_code: number
                        /** 省 */
                        province: string
                        /** 市 */
                        city?: string
                        /** 区 */
                        district?: string
                        /** 行政区划代码 */
                        adcode: number
                    }
                }
            }
        }
        /** 查询地点 */
        namespace SearchPosition {
            type Request = {
                /** 关键词 */
                keyword: string
                /** 每页数据数量 */
                page_size?: number
                /** 页码 */
                page_index?: number
                /** 是否返回子地点 */
                get_subpois?: 0 | 1
            }
            type Response = {
                status: number
                /** 状态说明 */
                message: string
                /** 本次请求的唯一标识，由系统自动生成，用于追查结果有异常时使用 */
                request_id: string
                /** 本次搜索结果总数，另外本服务限制最多返回200条数据(data) */
                count: number
                /** 搜索结果POI（地点）数组 */
                data: {
                    /** POI（地点）唯一标识 */
                    id: string
                    /** POI（地点）名称 */
                    title: string
                    /** 地址 */
                    address: string
                    /** 电话 */
                    tel: string
                    /** POI（地点）分类 */
                    category: string
                    /** POI（地点）分类编码，设置added_fields=category_code时返回 */
                    category_code: number
                    /** POI类型，值说明：0:普通POI / 1:公交车站 / 2:地铁站 / 3:公交线路 / 4:行政区划 */
                    type?: number
                    location: {
                        /** 纬度 */
                        lat: number
                        /** 经度 */
                        lng: number
                    }
                    /** 距离，单位： 米，在周边搜索、城市范围搜索传入定位点时返回 */
                    _distance: number
                    /** 行政区划信息 */
                    ad_info: {
                        /** 行政区划代码 */
                        adcode: number
                        /** 省 */
                        province: string
                        /** 市 */
                        city: string
                        /** 区 */
                        district: string
                    }
                }[]
                /** 子地点列表，仅在输入参数get_subpois=1时返回 */
                sub_pois?: {
                    /** 主地点ID，对应data中的地点ID */
                    parent_id: string
                    /** 地点唯一标识 */
                    id: string
                    /** 地点名称 */
                    title: string
                    /** 电话 */
                    tel: string
                    /** POI（地点）分类 */
                    category: string
                    /** POI类型，值说明：0:普通POI / 1:公交车站 / 2:地铁站 / 3:公交线路 / 4:行政区划 */
                    type: number
                    /** 地址 */
                    address: string
                    location: {
                        /** 纬度 */
                        lat: number
                        /** 经度 */
                        lng: number
                    }
                    /** 行政区划信息 */
                    ad_info: {
                        /** 行政区划代码 */
                        adcode: number
                        /** 省 */
                        province: string
                        /** 市 */
                        city: string
                        /** 区 */
                        district: string
                    }
                }[]
                /** 搜索公交线路数组，每项为一个公交路线对象 */
                lines?: {
                    /** 公交线路唯一标识 */
                    id?: string
                    /** 公交线路名称 */
                    title?: string
                    origin?: {
                        /** 始发站站点名称 */
                        title?: string
                    }
                    /** 当前公交线路的终点站 */
                    destination?: {
                        /** 终点站站点名称 */
                        title?: string
                    }
                }[]
                /** POI数据所属地区 */
                region: {
                    /** 所属地区名称 */
                    title: string
                }
            }
        }
    }

}
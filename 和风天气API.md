## 1：和风天气API文档链接

- [城市天气 | 和风天气开发服务 (qweather.com)](https://dev.qweather.com/docs/api/weather/)

## 2：各URL

### 1：天气URL 

#### ①实时天气

```
https://devapi.qweather.com/v7/weather/now?{请求参数}
```

#### ②每日天气

**3天预报**

```
https://devapi.qweather.com/v7/weather/3d?{请求参数}
```

**7天预报**

```
https://devapi.qweather.com/v7/weather/7d?{请求参数}
```

**10天预报**

```
https://devapi.qweather.com/v7/weather/10d?{请求参数}
```

**15天预报**

```
https://devapi.qweather.com/v7/weather/15d?{请求参数}
```

**30天预报**

```
https://devapi.qweather.com/v7/weather/30d?{请求参数}
```

#### ③逐小时天气

**逐小时预报（未来24小时）**

```
https://devapi.qweather.com/v7/weather/24h?{请求参数}
```

**逐小时预报（未来72小时）**

```
https://devapi.qweather.com/v7/weather/72h?{请求参数}
```

**逐小时预报（未来168小时）**

```
https://devapi.qweather.com/v7/weather/168h?{请求参数}
```

#### ④请求参数

- `key`**(必选)**用户认证key，请参考[如何获取你的KEY](https://dev.qweather.com/docs/configuration/project-and-key/)。支持[数字签名](https://dev.qweather.com/docs/resource/signature-auth/)方式进行认证。例如 `key=123456789ABC`
- `location`**(必选)**需要查询地区的[LocationID](https://dev.qweather.com/docs/resource/glossary/#locationid)或以英文逗号分隔的[经度,纬度坐标](https://dev.qweather.com/docs/resource/glossary/#coordinate)（十进制，最多支持小数点后两位），LocationID可通过[GeoAPI](https://dev.qweather.com/docs/api/geoapi/)获取。例如 `location=101010100` 或 `location=116.41,39.92`
- `lang`多语言设置，请阅读[多语言](https://dev.qweather.com/docs/resource/language/)文档，了解我们的多语言是如何工作、如何设置以及数据是否支持多语言。
- `unit`数据单位设置，可选值包括`unit=m`（公制单位，默认）和`unit=i`（英制单位）。更多选项和说明参考[度量衡单位](https://dev.qweather.com/docs/resource/unit)。

#### ⑤返回数据字段解释

- `code` 请参考[状态码](https://dev.qweather.com/docs/resource/status-code/)
- `updateTime` 当前[API的最近更新时间](https://dev.qweather.com/docs/resource/glossary/#update-time)
- `fxLink` 当前数据的响应式页面，便于嵌入网站或应用
- `daily.fxDate` 预报日期
- `daily.sunrise` [日出时间](https://dev.qweather.com/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空**
- `daily.sunset` [日落时间](https://dev.qweather.com/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空**
- `daily.moonrise` 当天[月升时间](https://dev.qweather.com/docs/resource/sun-moon-info/#moonrise-and-moonset)，**可能为空**
- `daily.moonset` 当天[月落时间](https://dev.qweather.com/docs/resource/sun-moon-info/#moonrise-and-moonset)，**可能为空**
- `daily.moonPhase` [月相名称](https://dev.qweather.com/docs/resource/sun-moon-info/#moon-phase)
- `daily.moonPhaseIcon` 月相[图标代码](https://dev.qweather.com/docs/resource/icons/)，另请参考[天气图标项目](https://icons.qweather.com/)
- `daily.tempMax` 预报当天最高温度
- `daily.tempMin` 预报当天最低温度
- `daily.iconDay` 预报白天天气状况的[图标代码](https://dev.qweather.com/docs/resource/icons/)，另请参考[天气图标项目](https://icons.qweather.com/)
- `daily.textDay` 预报白天天气状况文字描述，包括阴晴雨雪等天气状态的描述
- `daily.iconNight` 预报夜间天气状况的[图标代码](https://dev.qweather.com/docs/resource/icons/)，另请参考[天气图标项目](https://icons.qweather.com/)
- `daily.textNight` 预报晚间天气状况文字描述，包括阴晴雨雪等天气状态的描述
- `daily.wind360Day` 预报白天[风向](https://dev.qweather.com/docs/resource/wind-info/#wind-direction)360角度
- `daily.windDirDay` 预报白天[风向](https://dev.qweather.com/docs/resource/wind-info/#wind-direction)
- `daily.windScaleDay` 预报白天[风力等级](https://dev.qweather.com/docs/resource/wind-info/#wind-scale)
- `daily.windSpeedDay` 预报白天[风速](https://dev.qweather.com/docs/resource/wind-info/#wind-speed)，公里/小时
- `daily.wind360Night` 预报夜间[风向](https://dev.qweather.com/docs/resource/wind-info/#wind-direction)360角度
- `daily.windDirNight` 预报夜间当天[风向](https://dev.qweather.com/docs/resource/wind-info/#wind-direction)
- `daily.windScaleNight` 预报夜间[风力等级](https://dev.qweather.com/docs/resource/wind-info/#wind-scale)
- `daily.windSpeedNight` 预报夜间[风速](https://dev.qweather.com/docs/resource/wind-info/#wind-speed)，公里/小时
- `daily.precip` 预报当天总降水量，默认单位：毫米
- `daily.uvIndex` 紫外线强度指数
- `daily.humidity` 相对湿度，百分比数值
- `daily.pressure` 大气压强，默认单位：百帕
- `daily.vis` 能见度，默认单位：公里
- `daily.cloud` 云量，百分比数值。**可能为空**
- `refer.sources` 原始数据来源，或数据源说明，**可能为空**
- `refer.license` 数据许可或版权声明，**可能为空**

### 2：天气指数URL 

#### ①URL

**当天生活指数**

```
https://devapi.qweather.com/v7/indices/1d?{请求参数}
```

**未来3天生活指数**

```
https://devapi.qweather.com/v7/indices/3d?{请求参数}
```

#### ②请求参数

- `key`**(必选)**用户认证key，请参考[如何获取你的KEY](https://dev.qweather.com/docs/configuration/project-and-key/)。支持[数字签名](https://dev.qweather.com/docs/resource/signature-auth/)方式进行认证。例如 `key=123456789ABC`
- `location`**(必选)**需要查询地区的[LocationID](https://dev.qweather.com/docs/resource/glossary/#locationid)或以英文逗号分隔的[经度,纬度坐标](https://dev.qweather.com/docs/resource/glossary/#coordinate)（十进制，最多支持小数点后两位），LocationID可通过[GeoAPI](https://dev.qweather.com/docs/api/geoapi/)获取。例如 `location=101010100` 或 `location=116.41,39.92`
- `type`**(必选)**生活指数的类型ID，包括洗车指数、穿衣指数、钓鱼指数等。可以一次性获取多个类型的生活指数，多个类型用英文`,`分割。例如`type=3,5`。具体生活指数的ID和等级参考[天气指数信息](https://dev.qweather.com/docs/resource/indices-info/)。各项生活指数并非适用于所有城市。
- `lang`多语言设置，请阅读[多语言](https://dev.qweather.com/docs/resource/language/)文档，了解我们的多语言是如何工作、如何设置以及数据是否支持多语言。

#### ③返回数据字段解释

- `code` 请参考[状态码](https://dev.qweather.com/docs/resource/status-code/)
- `updateTime` 当前[API的最近更新时间](https://dev.qweather.com/docs/resource/glossary/#update-time)
- `fxLink` 当前数据的响应式页面，便于嵌入网站或应用
- `daily.date` 预报日期
- `daily.type` 生活指数类型ID
- `daily.name` 生活指数类型的名称
- `daily.level` 生活指数预报等级
- `daily.category` 生活指数预报级别名称
- `daily.text` 生活指数预报的详细描述，**可能为空**
- `refer.sources` 原始数据来源，或数据源说明，**可能为空**
- `refer.license` 数据许可或版权声明，**可能为空**

#### ④天气指数类型

| 天气指数类型         | API类型值 | iOS SDK类型常量   | Android SDK类型常量 |
| :------------------- | :-------- | :---------------- | :------------------ |
| 全部天气指数         | 0         | INDICES_TYPE_all  | ALL                 |
| 运动指数             | 1         | INDICES_TYPE_spt  | SPT                 |
| 洗车指数             | 2         | INDICES_TYPE_cw   | CW                  |
| 穿衣指数             | 3         | INDICES_TYPE_drsg | DRSG                |
| 钓鱼指数             | 4         | INDICES_TYPE_fis  | FIS                 |
| 紫外线指数           | 5         | INDICES_TYPE_uv   | UV                  |
| 旅游指数             | 6         | INDICES_TYPE_tra  | TRA                 |
| 花粉过敏指数         | 7         | INDICES_TYPE_ag   | AG                  |
| 舒适度指数           | 8         | INDICES_TYPE_comf | COMF                |
| 感冒指数             | 9         | INDICES_TYPE_flu  | FLU                 |
| 空气污染扩散条件指数 | 10        | INDICES_TYPE_ap   | AP                  |
| 空调开启指数         | 11        | INDICES_TYPE_ac   | AC                  |
| 太阳镜指数           | 12        | INDICES_TYPE_gl   | GL                  |
| 化妆指数             | 13        | INDICES_TYPE_mu   | MU                  |
| 晾晒指数             | 14        | INDICES_TYPE_dc   | DC                  |
| 交通指数             | 15        | INDICES_TYPE_ptfc | PTFC                |
| 防晒指数             | 16        | INDICES_TYPE_spi  | SPI                 |

#### ⑤天气指数等级

| 天气指数类型         | 级别名称(对应等级数值)                                       |
| :------------------- | :----------------------------------------------------------- |
| 运动指数             | 适宜(1)、较适宜(2)、较不宜(3)                                |
| 洗车指数             | 适宜(1)、较适宜(2)、较不宜(3)、不宜(4)                       |
| 穿衣指数             | 寒冷(1)、冷(2)、较冷(3)、较舒适(4)、舒适(5)、热(6)、炎热(7)  |
| 钓鱼指数             | 适宜(1)、较适宜(2)、不宜(3)                                  |
| 紫外线指数           | 最弱(1)、弱(2)、中等(3)、强(4)、很强(5)                      |
| 旅游指数             | 适宜(1)、较适宜(2)、一般(3)、较不宜(4)、不适宜(5)            |
| 花粉过敏指数         | 极不易发(1)、不易发(2)、较易发(3)、易发(4)、极易发(5)        |
| 舒适度指数           | 舒适(1)、较舒适(2)、较不舒适(3)、很不舒适(4)、极不舒适(5)、不舒适(6)、非常不舒适(7) |
| 感冒指数             | 少发(1)、较易发(2)、易发(3)、极易发(4)                       |
| 空气污染扩散条件指数 | 优(1)、良(2)、中(3)、较差(4)、很差(5)                        |
| 空调开启指数         | 长时间开启(1)、部分时间开启(2)、较少开启(3)、开启制暖空调(4) |
| 太阳镜指数           | 不需要(1)、需要(2)、必要(3)、很必要(4)、非常必要(5)          |
| 化妆指数             | 保湿(1)、保湿防晒(2)、去油防晒(3)、防脱水防晒(4)、去油(5)、防脱水(6)、防晒(7)、滋润保湿(8) |
| 晾晒指数             | 极适宜(1)、适宜(2)、基本适宜(3)、不太适宜(4)、不宜(5)、不适宜(6) |
| 交通指数             | 良好(1)、较好(2)、一般(3)、较差(4)、很差(5)                  |
| 防晒指数             | 弱(1)、较弱(2)、中等(3)、强(4)、极强(5)                      |

### 3：空气质量URL

#### ①实时空气质量

```
https://devapi.qweather.com/v7/air/now?{请求参数}
```

#### ②每日空气质量

```
https://devapi.qweather.com/v7/air/5d?{请求参数}
```

#### ③请求参数

- `key`**(必选)**用户认证key，请参考[如何获取你的KEY](https://dev.qweather.com/docs/configuration/project-and-key/)。支持[数字签名](https://dev.qweather.com/docs/resource/signature-auth/)方式进行认证。例如 `key=123456789ABC`
- `location`**(必选)**需要查询地区的[LocationID](https://dev.qweather.com/docs/resource/glossary/#locationid)或以英文逗号分隔的[经度,纬度坐标](https://dev.qweather.com/docs/resource/glossary/#coordinate)（十进制，最多支持小数点后两位），LocationID可通过[GeoAPI](https://dev.qweather.com/docs/api/geoapi/)获取。例如 `location=101010100` 或 `location=116.41,39.92`
- `lang`多语言设置，请阅读[多语言](https://dev.qweather.com/docs/resource/language/)文档，了解我们的多语言是如何工作、如何设置以及数据是否支持多语言。

#### ④返回数据字段解释

##### 实时

- `code` 请参考[状态码](https://dev.qweather.com/docs/resource/status-code/)
- `updateTime` 当前[API的最近更新时间](https://dev.qweather.com/docs/resource/glossary/#update-time)
- `fxLink` 当前数据的响应式页面，便于嵌入网站或应用
- `now.pubTime` 空气质量数据发布时间
- `now.aqi` 空气质量指数
- `now.level` 空气质量指数等级
- `now.category` 空气质量指数级别
- `now.primary` 空气质量的主要污染物，空气质量为优时，返回值为`NA`
- `now.pm10` PM10
- `now.pm2p5` PM2.5
- `now.no2` 二氧化氮
- `now.so2` 二氧化硫
- `now.co` 一氧化碳
- `now.o3` 臭氧
- `station.name` 监测站名称
- `station.id` 监测站ID
- `station.pubTime` 空气质量数据发布时间
- `station.aqi` 空气质量指数
- `station.level` 空气质量指数等级
- `station.category` 空气质量指数级别
- `station.primary` 空气质量的主要污染物，空气质量为优时，返回值为`NA`
- `station.pm10` PM10
- `station.pm2p5` PM2.5
- `station.no2` 二氧化氮
- `station.so2` 二氧化硫
- `station.co` 一氧化碳
- `station.o3` 臭氧
- `refer.sources` 原始数据来源，或数据源说明，**可能为空**
- `refer.license` 数据许可或版权声明，**可能为空**

##### 每日

- `code` 请参考[状态码](https://dev.qweather.com/docs/resource/status-code/)
- `updateTime` 当前[API的最近更新时间](https://dev.qweather.com/docs/resource/glossary/#update-time)
- `fxLink` 当前数据的响应式页面，便于嵌入网站或应用
- `daily.fxDate` 预报日期
- `daily.aqi` 空气质量指数
- `daily.level` 空气质量指数等级
- `daily.category` 空气质量指数级别
- `daily.primary` 空气质量的主要污染物，空气质量为优时，返回值为`NA`
- `refer.sources` 原始数据来源，或数据源说明，**可能为空**
- `refer.license` 数据许可或版权声明，**可能为空**

#### ⑤空气质量等级

| 数值    | 等级 | 级别     | 级别颜色 |
| :------ | :--- | :------- | :------- |
| 0-50    | 一级 | 优       | 绿色     |
| 51-100  | 二级 | 良       | 黄色     |
| 101-150 | 三级 | 轻度污染 | 橙色     |
| 151-200 | 四级 | 中度污染 | 红色     |
| 201-300 | 五级 | 重度污染 | 紫色     |
| >300    | 六级 | 严重污染 | 褐红色   |

### 4：城市搜索

#### ①URL

```
https://geoapi.qweather.com/v2/city/lookup?{请求参数}
```

#### ②请求参数

- `location`**(必选)**需要查询地区的名称，支持文字、以英文逗号分隔的[经度,纬度坐标](https://dev.qweather.com/docs/resource/glossary/#coordinate)（十进制，最多支持小数点后两位）、[LocationID](https://dev.qweather.com/docs/resource/glossary/#locationid)或[Adcode](https://dev.qweather.com/docs/resource/glossary/#adcode)（仅限中国城市）。例如 `location=北京` 或 `location=116.41,39.92`

> **模糊搜索**，当location传递的为文字时，支持模糊搜索，即用户可以只输入城市名称一部分进行搜索，最少一个汉字或2个字符，结果将按照相关性和[Rank值](https://dev.qweather.com/docs/resource/glossary/#rank)进行排列，便于开发或用户进行选择他们需要查看哪个城市的天气。例如`location=bei`，将返回与bei相关性最强的若干结果，包括黎巴嫩的贝鲁特和中国的北京市

> **重名**，当location传递的为文字时，可能会出现重名的城市，例如陕西省西安市、吉林省辽源市下辖的西安区和黑龙江省牡丹江市下辖的西安区，此时会根据[Rank值](https://dev.qweather.com/docs/resource/glossary/#rank)排序返回所有结果。在这种情况下，可以通过`adm`参数的方式进一步确定需要查询的城市或地区，例如`location=西安&adm=黑龙江`

- `key`**(必选)**用户认证key，请参考[如何获取你的KEY](https://dev.qweather.com/docs/configuration/project-and-key/)。支持[数字签名](https://dev.qweather.com/docs/resource/signature-auth/)方式进行认证。例如 `key=123456789ABC`
- `adm`城市的上级行政区划，可设定只在某个行政区划范围内进行搜索，用于排除重名城市或对结果进行过滤。例如 `adm=beijing`

> 如请求参数为`location=chaoyang&adm=beijing`时，返回的结果只包括北京市的朝阳区，而不包括辽宁省的朝阳市
>
> 如请求参数仅为`location=chaoyang`时，返回的结果包括北京市的朝阳区、辽宁省的朝阳市以及长春市的朝阳区

- `range`搜索范围，可设定只在某个国家或地区范围内进行搜索，国家和地区名称需使用[ISO 3166 所定义的国家代码](https://dev.qweather.com/docs/resource/glossary/#iso-3166)。如果不设置此参数，搜索范围将在所有城市。例如 `range=cn`
- `number`返回结果的数量，取值范围1-20，默认返回10个结果。
- `lang`多语言设置，请阅读[多语言](https://dev.qweather.com/docs/resource/language/)文档，了解我们的多语言是如何工作、如何设置以及数据是否支持多语言。

#### ③返回数据字段解释

- `code` 请参考[状态码](https://dev.qweather.com/docs/resource/status-code/)
- `location.name` 地区/城市名称
- `location.id` 地区/城市ID
- `location.lat` 地区/城市纬度
- `location.lon` 地区/城市经度
- `location.adm2` 地区/城市的上级行政区划名称
- `location.adm1` 地区/城市所属一级行政区域
- `location.country` 地区/城市所属国家名称
- `location.tz` 地区/城市所在[时区](https://dev.qweather.com/docs/resource/glossary/#timezone)
- `location.utcOffset` 地区/城市目前与UTC时间偏移的小时数，参考[详细说明](https://dev.qweather.com/docs/resource/glossary/#utc-offset)
- `location.isDst` 地区/城市是否当前处于[夏令时](https://dev.qweather.com/docs/resource/glossary/#daylight-saving-time)。`1` 表示当前处于夏令时，`0` 表示当前不是夏令时。
- `location.type` 地区/城市的属性
- `location.rank` [地区评分](https://dev.qweather.com/docs/resource/glossary/#rank)
- `location.fxLink` 该地区的天气预报网页链接，便于嵌入你的网站或应用
- `refer.sources` 原始数据来源，或数据源说明，**可能为空**
- `refer.license` 数据许可或版权声明，**可能为空**
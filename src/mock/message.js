import Mock from 'mockjs'
import qs from 'querystring'

Mock.mock('/api/message', 'post', {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        nickname: "@cname",
        content: "@paragraph(1, 3)",
        createDate: Date.now(),
        "avatar|1": [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
        ],
    }
})

Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function (options) {
    const limit = qs.parse(options.url).limit;
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|52": 786, // #总数
            [`rows|${limit || 10}`]: [  //# 当前页列表数据
                {
                    id: "@guid",
                    nickname: "@cname",
                    content: "@cparagraph(1,3)",
                    createDate: "@date(T)",
                    "avatar|1": [
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
                    ],
                }
            ]
        }
    })
})
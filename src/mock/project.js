import Mock from "mockjs"

Mock.mock('/api/project', 'get', {
    code: 0,
    msg: "",
    "data|1-5": [
        {
            id: "@guid",
            name: "@ctitle",
            "url|1": ["@url", null],
            "github|1": ["", null],
            "description|1-3": ["@cparagraph(1)"],
            "thumb": "@image(200x150, @color, #fff, @date)",
            order: 1
        }
    ]
})
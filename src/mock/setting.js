import Mock from "mockjs";

Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
    avatar: "https://img0.baidu.com/it/u=3387485508,4022969651&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=640", 
    siteTitle: "我的个人空间", 
    github: "https://github.com/jifeng22", 
    qq: "1449466534",
    qqQrCode:  "https://qr.api.cli.im/newqr/create?data=https%253A%252F%252Fgithub.com%252Fjifeng22&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=500&kid=cliim&key=a89841d3a64a5de0ece8d08f6503ae2b", 
    weixin: "jifeng", 
    weixinQrCode:      "https://qr.api.cli.im/newqr/create?data=https%253A%252F%252Fgithub.com%252Fjifeng22&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=500&kid=cliim&key=a89841d3a64a5de0ece8d08f6503ae2b",
    mail: "duyi@gmail.com", 
    icp: "备案号", 
    githubName: "jifeng22", 
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})
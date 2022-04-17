import {
    showMessage
} from "@/utils";
import axios from "axios";

const ins = axios.create(); //创建axios实例
ins.interceptors.response.use(function (resp) { //拦截响应
    if (resp.data.code !== 0) {
        showMessage({
            content: 'error',
            type: 'error'
        })
        return null;
    }
    return resp.data.data;

})
export default ins;
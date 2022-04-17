export default function (time, isMore=false) {
    const date = new Date(+time);
    const month = (date.getMonth() + 1).toString().padStart(2, 0); //保证两位数，不足的用零补充
    const day = date.getDate().toString().padStart(2, 0); //保证两位数，不足的用零补充
    const hour = date.getHours().toString().padStart(2, 0); //保证两位数，不足的用零补充
    const minute = date.getMinutes().toString().padStart(2, 0); //保证两位数，不足的用零补充
    const second = date.getSeconds().toString().padStart(2, 0); //保证两位数，不足的用零补充
    if(!isMore) {
        return `${date.getFullYear()}-${month}-${day}`
    }else {
        return `${date.getFullYear()}-${month}-${day}  ${hour}:${minute}`
    }
}
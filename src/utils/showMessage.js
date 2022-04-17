/**
 * 
 * **/
import getComponentRootDom from "./getComponentRootDom";
import Icon from '../components/Icon';
import styles from './message.module.less';

export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || 'info';
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, {
        type
    })
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`

    if (window.getComputedStyle(container).position === 'static' && container != document.body) {
        container.style.position = 'relative';
    }
    div.className = `${styles.message} ${styles["message-" + type]}`;
    container.appendChild(div);

    div.clientHeight; //强制浏览器reflow
    div.style.transform = 'translate(-50%, -50%)';
    div.style.opacity = 1;
    setTimeout(() => {
        div.style.transform = 'translate(-50%, -50%) translateY(-20px)';
        div.style.opacity = 0;
        div.addEventListener('transitionend', function () {
            if(options.callback) {
                options.callback()
                div.remove();
            }
        }, {once: true});
    }, duration)
    // console.log(iconDom.outerHTML);
}
import eventBus from '@/eventBus'
import { debounce } from '@/utils'

import lazyUrl from '@/assets/add.gif'

let images = [];
function setImage(img) {

    const rect = img.dom.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const height = rect.height || 150;
    img.dom.src = lazyUrl;
    if (rect.top > -height && rect.top < clientHeight) {
        // console.log(img.dom, '可见的图片')
        const image = new Image();
        image.onload = function () {
            img.dom.src = img.src;
        }
        image.src = img.src;
        images = images.filter(i => i.dom !== img.dom);
    }

}

function setImages() {
    for (const img of images) {
        setImage(img);
    }
}

function scroll() {
    setImages();
}
eventBus.$on('mainScroll', debounce(scroll, 50))

export default {

    inserted(el, binding) {
        images.push({
            dom: el,
            src: binding.value
        })
        setImages();
    },
    unbind(el) {
        images = images.filter((i) => i.dom !== el)

    }

}
import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less'


function getLoadingImage(el) {
    return el.querySelector('img[data-l=loading]');
}

function createLoadingImage() {
    const img = document.createElement('img');
    img.dataset.l = 'loading';
    img.className = styles.loading;
    img.src = loadingUrl;
    return img;
}



export default function (el, binding) {
    const curImg = getLoadingImage(el);
    if(binding.value) { 
        if(!curImg) {
            el.appendChild(createLoadingImage());
        }
        // !curImg &&  el.appendChild(createLoadingImage());
    }else {
        if(curImg) {
            curImg.remove();
        }
        // console.log(345);
        // curImg && curImg.remove();
    }
}
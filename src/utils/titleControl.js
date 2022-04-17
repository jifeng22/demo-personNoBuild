let routerTitle = '', setSiteTitle = '';
function setTitle() {
    if(!routerTitle && !setSiteTitle) {
        document.title = 'loading'
    }else if(routerTitle && !setSiteTitle){
        document.title = routerTitle;
    }else if(!routerTitle && setSiteTitle) {
        document.title = setSiteTitle
    }else{
        document.title = `${routerTitle}-${setSiteTitle}`
    }
}

export default {
    setRouteTitle(title) {   
        routerTitle = title;
        setTitle();
    },
    setSiteTitle(title){
        setSiteTitle = title;
        setTitle();
    }   
}